import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communications-two',
  templateUrl: './communications-two.component.html',
  styleUrls: ['./communications-two.component.scss']
})
export class CommunicationsTwoComponent implements OnInit {

  tableHeaderItems: string[] = [
    'EXPEDIENTE',
    'ORIGEN',
    'DESTINO',
    'FECHA',
    'DUA',
    'O/C'
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
