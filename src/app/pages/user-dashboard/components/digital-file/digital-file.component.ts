import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-file',
  templateUrl: './digital-file.component.html',
  styleUrls: ['./digital-file.component.scss']
})
export class DigitalFileComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "FECHA",
    "EXPEDIENTE",
    "SERVICIO",
    "NRO. DE DOCUMENTO",
    "MONTO"
  ];

  tableColumnsTags: string[] = [
    "date",
    "record",
    "service",
    "documentNumber",
    "amount"
  ];

  tableData: any[] = [
    {
      date: "12/01/2024",
      record: "PHK00123",
      service: "T,C,E & C",
      documentNumber: "PHK0000087",
      amount: "USD 8,999.00"
    },
    {
      date: "12/01/2024",
      record: "PHK00123",
      service: "T,C,E & C",
      documentNumber: "PHK0000087",
      amount: "USD 8,999.00"
    }
  ];

  itemsSelected: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
