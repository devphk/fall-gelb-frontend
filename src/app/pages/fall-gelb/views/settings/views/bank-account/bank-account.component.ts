import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormBankAccountComponent } from '../components';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
})
export class BankAccountComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Banco',
    'Número de Cuenta',
    'Moneda',
    'Prioridad',
  ];
  tableColumnsTags: string[] = [
    'id',
    'bank',
    'numberAccount',
    'currency',
    'priority',
  ];
  tableData: any[] = [
    {
      id: 1,
      bank: 'Caja USD',
      numberAccount: '00',
      currency: 'DOLAR (USD)	',
      priority: '5',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newBankAccount() {
    this.dialogService
      .openDialog(
        FormBankAccountComponent,
        'Registrar Cuenta Bancaria',
        '800px',
        '460px'
      )
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
