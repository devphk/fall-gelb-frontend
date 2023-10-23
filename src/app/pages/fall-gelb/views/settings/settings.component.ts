import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewContainerTypeComponent } from './views/components/new-container-type/new-container-type.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private dialogService:DialogService ) { }

  ngOnInit(): void {
  }

  containerTypeModal() {

    const dialogRef = this.dialogService.openDialog(
      NewContainerTypeComponent,
      'Nuevo Tipo de Contenedor',
      '600px',
      '250px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo contenedor ha sido cerrado');
    });

  }


}
