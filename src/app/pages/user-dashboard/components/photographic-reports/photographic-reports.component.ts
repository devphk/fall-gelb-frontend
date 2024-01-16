import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographic-reports',
  templateUrl: './photographic-reports.component.html',
  styleUrls: ['./photographic-reports.component.scss']
})
export class PhotographicReportsComponent implements OnInit {

  tableHeaderItems: string[] = [
    'FECHA',
    'EXPEDIENTE',
    'SERVICIO',
    'MINIATURA (FOTOS)',
    'MONTO'
  ]   

  constructor() { }

  ngOnInit(): void {
  }

}
