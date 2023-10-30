import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormCertificationComponent } from '../components';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Cliente',
    'Tipo expediente',
    'Oc',
    'Anticipo N°',
    'Fecha del Anticipo',
    'Monto',
  ];
  tableColumnsTags: string[] = [
    'id',
    'client',
    'record_id',
    'purchase_order',
    'advance_payment_number',
    'advance_payment_date',
    'advance_payment',
  ];
  tableData: any[] = [
    {
      id: 1,
      client: 'polar',
      record_id: 'PHK-23-0829',
      record_type_id: 'adua',
      purchase_order: '4513014081',
      advance_payment_number: '0',
      advance_payment_date: '23/10/2023',
      advance_payment: '0,00 BS',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newCertification() {
    this.dialogService
      .openDialog(
        FormCertificationComponent,
        'Nueva Certificacion',
        '800px',
        '460px'
      )
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
