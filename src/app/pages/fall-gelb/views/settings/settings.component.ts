import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services';

import { NewContainerTypeComponent } from './components/new-container-type/new-container-type.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private modalService:ModalService ) { }

  ngOnInit(): void {
  }

  containerTypeModal() {

    const dialogRef = this.modalService.openDialog(
      NewContainerTypeComponent,
      'Nuevo Tipo de Contenedor',
      '600px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo contenedor ha sido cerrado');
    });

  }


}
