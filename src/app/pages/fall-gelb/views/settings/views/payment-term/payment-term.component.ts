import { Component, OnInit } from '@angular/core';
import { PaymentTermService } from './payment-term.service';
import { DialogService, ToastService } from '@core/services';
import { PaymenTermResponse } from '@shared/models/payment-term';
import { FromPaymentTermComponent } from '../components';

@Component({
  selector: 'app-payment-term',
  templateUrl: './payment-term.component.html',
  styleUrls: ['./payment-term.component.scss'],
})
export class PaymentTermComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private paymenTermService: PaymentTermService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getpaymenTerms();
  }

  getpaymenTerms() {
    this.paymenTermService.getPaymenTerms().subscribe(
      (response) => {
        const tableData: PaymenTermResponse[] = [];

        response.forEach((paymenTerm) => {
          const paymenTermToInput = {
            id: paymenTerm.id,
            name: paymenTerm.name,
          };

          tableData.push(paymenTermToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processPaymenTerm(processType: string) {
    this.dialogService
      .openDialog(
        FromPaymentTermComponent,
        processType === 'Add' ? 'Crear Banco' : 'Editar Banco',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((paymenTerm) => {
        if (paymenTerm) {
          this.refreshPaymenTerms();
        }
      });
  }

  deletePaymenTerm() {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Banco`,
        `¿Desea eliminar banco '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.paymenTermService
            .deletePaymenTerms(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster('Banco eliminado correctamente!');
                this.refreshPaymenTerms();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshPaymenTerms() {
    this.tableData = [];

    this.paymenTermService.getPaymenTerms().subscribe((paymenTerms) => {
      paymenTerms.forEach((paymenTerm) => {
        const paymenTermToInput = {
          id: paymenTerm.id,
          name: paymenTerm.name,
        };

        this.tableData.push(paymenTermToInput);
      });
    });
  }
}
