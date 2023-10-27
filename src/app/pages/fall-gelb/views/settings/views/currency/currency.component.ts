import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormCurrencyComponent } from '../components';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Código', 'Descripción'];
  tableColumnsTags: string[] = ['id', 'name', 'description'];
  tableData: any[] = [
    {
      id: 1,
      code: 'COP',
      description: 'PESOS COLOMBIANOS',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newCurrency() {
    this.dialogService
      .openDialog(FormCurrencyComponent, 'Registrar Moneda', '800px', '460px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
