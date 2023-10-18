import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services';
import { NewCustomsComponent } from './components/new-customs/new-customs.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private modalService:ModalService ) { }

  ngOnInit(): void {
  }

  customsModal() {

    const dialogRef = this.modalService.openDialog(
      NewCustomsComponent,
      'Nueva Aduana',
      '800px',
      '400px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });

  }

}
