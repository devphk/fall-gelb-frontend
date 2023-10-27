import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewCustomsComponent } from './views/components/new-customs/new-customs.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
