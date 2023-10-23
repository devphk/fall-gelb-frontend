import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewWarehouseComponent } from './views/agents/components/new-warehouse/new-warehouse.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }

  warehouseModal() {

    const dialogRef = this.dialogService.openDialog(
      NewWarehouseComponent,
      'Nuevo Almacén',
      '800px',
      '250px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo almacén ha sido cerrado');
    });

  }


}
