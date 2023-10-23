import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormBankComponent } from '../components';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [
    {
      id: 1,
      name: 'BBVA Provincial',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newBank() {
    this.dialogService
      .openDialog(FormBankComponent, 'Nuevo Proveedor', '800px', '460px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
