import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services';
import { NewTruckTypeComponent } from './components/new-truck-type/new-truck-type.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private modalService:ModalService ) { }

  ngOnInit(): void {
  }

  truckTypeModal() {

    const dialogRef = this.modalService.openDialog(
      NewTruckTypeComponent,
      'Nuevo Tipo de Camión',
      '700px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo camión ha sido cerrado');
    });

  }

}
