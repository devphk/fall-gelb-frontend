import { Component, OnInit } from '@angular/core';
import { NewGoodsTypeComponent } from './components/new-goods-type/new-goods-type.component';
import { ModalService } from 'src/app/core/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private modalService:ModalService ) { }

  ngOnInit(): void {
  }

  goodsTypeModal() {

    const dialogRef = this.modalService.openDialog(
      NewGoodsTypeComponent,
      'Nuevo Tipo de Mercancía',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });

  }

}
