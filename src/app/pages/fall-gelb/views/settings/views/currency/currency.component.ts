import { ToastService } from './../../../../../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormCurrencyComponent } from '../components';
import { CurrencyDataTable } from '@shared/models/currency';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Código', 'Descripción'];
  tableColumnsTags: string[] = ['id', 'code', 'name'];
  tableData: CurrencyDataTable[] = [];

  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private currencyService: CurrencyService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getbanks();
  }

  getbanks() {
    this.currencyService.getCurrencies().subscribe(
      (response) => {
        const tableData: CurrencyDataTable[] = [];

        response.forEach((currency: any) => {
          const bankToInput: CurrencyDataTable = {
            id: currency.id,
            name: currency.name,
            code: currency.code,
            decimals: currency.decimals,
          };

          tableData.push(bankToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processCurrency(processType: string) {
    this.dialogService
      .openDialog(
        FormCurrencyComponent,
        processType === 'Add' ? 'Crear Moneda' : 'Editar Moneda',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((currencies) => {
        if (currencies) {
          this.refreshCurrencies();
        }
      });
  }

  deleteCurrency() {
    this.dialogService
      .openConfirmationDialog(
        'Eliminar Moneda',
        `¿Desea eliminar moneda '${this.itemsSelected[0].name}' ?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.currencyService
            .deleteCurrency(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  ' Moneda eliminada correctamente!'
                );
                this.refreshCurrencies();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshCurrencies() {
    this.tableData = [];

    this.currencyService.getCurrencies().subscribe((currencies) => {
      currencies.forEach((currency: any) => {
        const currenciesToInput = {
          id: currency.id,
          name: currency.name,
          code: currency.name,
          decimals: currency.decimals,
        };

        this.tableData.push(currenciesToInput);
      });
    });
  }
}
