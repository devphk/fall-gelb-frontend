import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewUnitsComponent } from 'src/app/pages/fall-gelb/views/settings/views/components/new-units/new-units.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private modalService:DialogService) { }

  ngOnInit(): void {
  }

  showUnitsModal() {

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
