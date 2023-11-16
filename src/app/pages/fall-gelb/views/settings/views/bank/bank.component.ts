import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormBankComponent } from '../components';
import { BankDataTable } from '@shared/models/bank';
import { BankService } from './bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private bankService: BankService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getbanks();
  }

  getbanks() {
    this.bankService.getBanks().subscribe(
      (response) => {
        const tableData: BankDataTable[] = [];

        response.forEach((bank) => {
          const bankToInput: BankDataTable = {
            id: bank.id,
            name: bank.name,
          };

          tableData.push(bankToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processBank(processType: string) {
    this.dialogService
      .openDialog(
        FormBankComponent,
        processType === 'Add' ? 'Crear Banco' : 'Editar Banco',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((bank) => {
        if (bank) {
          this.refreshBanks();
        }
      });
  }

  deleteBank() {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Banco`,
        `¿Desea eliminar banco '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.bankService.deleteBanks(this.itemsSelected[0].id).subscribe(
            (data) => {
              this.toastService.showToaster('Banco eliminado correctamente!');
              this.refreshBanks();
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
        }
      });
  }

  refreshBanks() {
    this.tableData = [];

    this.bankService.getBanks().subscribe((banks) => {
      banks.forEach((bank) => {
        const bankToInput = {
          id: bank.id,
          name: bank.name,
        };

        this.tableData.push(bankToInput);
      });
    });
  }
}
