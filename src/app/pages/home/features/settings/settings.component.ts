import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services';
import { NewWarehouseComponent } from './components/new-warehouse/new-warehouse.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  warehouseModal() {

    const dialogRef = this.modalService.openDialog(
      NewWarehouseComponent,
      'Nuevo Almacén',
      '800px',
      '400px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo almacén ha sido cerrado');
    });

  }


}
