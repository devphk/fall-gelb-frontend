import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewWarehouseComponent } from './views/components/new-warehouse/new-warehouse.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }

}
