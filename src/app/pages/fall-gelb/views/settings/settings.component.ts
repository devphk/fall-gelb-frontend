import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewGoodsTypeComponent } from './views/components/new-goods-type/new-goods-type.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
