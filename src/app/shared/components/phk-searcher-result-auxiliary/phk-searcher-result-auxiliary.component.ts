import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phk-searcher-result-auxiliary',
  templateUrl: './phk-searcher-result-auxiliary.component.html',
  styleUrls: ['./phk-searcher-result-auxiliary.component.scss'],
})
export class PhkSearcherResultAuxiliaryComponent implements OnInit {
  constructor() {}
  @Input() tittle: string = '';
  @Input() subTittle: string = '';
  @Input() img: string = '';
  @Input() extraInfo: string = '';

  ngOnInit(): void {}
}
