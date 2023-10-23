import { Component, OnInit } from '@angular/core';
import { NewUnitsComponent } from './components/new-units/new-units.component';
import { ModalService } from 'src/app/core/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  showModal() {

    const dialogRef = this.modalService.openDialog(
      NewUnitsComponent,
      'Nueva Unidad',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo unidades ha sido cerrado');
    });

  }

}
