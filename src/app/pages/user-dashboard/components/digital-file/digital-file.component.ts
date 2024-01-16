import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-file',
  templateUrl: './digital-file.component.html',
  styleUrls: ['./digital-file.component.scss']
})
export class DigitalFileComponent implements OnInit {


  tableHeaderItems: string[] = [
    'FECHA',
    'EXPEDIENTE',
    'SERVICIO',
    'NRO. DE DOCUMENTO',
    'MONTO'
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
