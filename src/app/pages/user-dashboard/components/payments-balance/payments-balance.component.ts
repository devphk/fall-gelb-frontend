import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-balance',
  templateUrl: './payments-balance.component.html',
  styleUrls: ['./payments-balance.component.scss']
})
export class PaymentsBalanceComponent implements OnInit {

  tableHeaderItems: string[] = [
    'FECHA',
    'CODIGO',
    'DESCRIPCION',
    'TOTAL',
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
