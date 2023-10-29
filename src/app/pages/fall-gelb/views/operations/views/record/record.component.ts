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
    'Creación',
    'Compañia',
    'Exp. PHK',
    'Exp. SDN',
    'Guia/BL',
    'OC',
    'Analista',
    'Analista Phoinike',
    'Facturas registradas',
    'Pend. I.V.A',
    'Pend. I.S.L.R',
    'Estatus',
  ];
  tableColumnsTags: string[] = [
    'id',
    'create_date',
    'client',
    'recrod_phk',
    'record_sdn',
    'guide_bl',
    'orderPayment',
    'analyst_client',
    'analyst_phk',
    'registered_invoices',
    'pending_iva',
    'pending_islr',
    'status',
  ];
  tableData: any[] = [
    {
      id: '1805',
      create_date: '25/10/2023',
      client: 'INVERSIONES SELVA C.A.',
      recrod_phk: 'PHK-23-0855',
      record_sdn: 'SDN-3769',
      guide_bl: 'PEDNIENTE67',
      orderPayment: 'SINOC',
      analyst_client: 'A',
      analyst_phk: 'ROBERTO JIMENEZ',
      registered_invoices: '0',
      pending_iva: '0',
      pending_islr: '0',
      status: 'En Operaciones',
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
