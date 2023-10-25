import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormRecordComponent } from '../components';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Teléfono',
    'Rif',
    'Dirección fiscal',
    'Contribuyente',
    'Servicios',
  ];
  tableColumnsTags: string[] = [
    'id',
    'name',
    'phone',
    'rif',
    'fiscalAddress',
    'taxpayer',
    'services',
  ];
  tableData: any[] = [
    {
      id: 1,
      name: 'Albert Tuarez',
      phone: '04127527692',
      rif: 'V-244.498.096',
      fiscalAddress: 'Calle plaza, casa 13-34',
      taxpayer: 'No',
      services: 'Gastos de vehículos',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newRecord() {
    this.dialogService
      .openDialog(FormRecordComponent, 'Nuevo Expediente', '850px', '6000px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
