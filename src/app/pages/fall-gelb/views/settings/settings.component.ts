import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services';
import { NewCustomsComponent } from './views/components/new-customs/new-customs.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private dialogService:DialogService ) { }

  ngOnInit(): void {
  }

  customsModal() {

    const dialogRef = this.dialogService.openDialog(
      NewCustomsComponent,
      'Nueva Aduana',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });

  }

}
