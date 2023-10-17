import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { NewShippingcompanyComponent } from './components/new-shippingcompany/new-shippingcompany.component';
import { NewConsolidatorComponent } from './components/new-consolidator/new-consolidator.component';
import { NewAirlineComponent } from './components/new-airline/new-airline.component';
import { NewGroundtransportComponent } from './components/new-groundtransport/new-groundtransport.component';
import { NewDriverComponent } from './components/new-driver/new-driver.component';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  form: FormGroup = this.fb.group({
    control: this.fb.control("")
  });

  constructor(private modalService:ModalService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  showForm() {
    console.log("this.form: ", this.form)
    console.log("value: ", this.form.get('control')!.value)
  }

  showModal() {

    const dialogRef = this.modalService.openDialog(
      NewProviderComponent,
      'Nuevo Proveedor',
      '800px',
      '600px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo proveedor ha sido cerrado');
    });

  }
  showModal2() {

    const dialogRef = this.modalService.openDialog(
      NewCustomerComponent,
      'Nuevo Cliente',
      '800px',
      '500px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo cliente ha sido cerrado');
    });

  }
  
  showModal3() {

    const dialogRef = this.modalService.openDialog(
      NewShippingcompanyComponent,
      'Nueva Naviera',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo naviera ha sido cerrado');
    });

  }
  
  showModal4() {

    const dialogRef = this.modalService.openDialog(
      NewConsolidatorComponent,
      'Nuevo Consolidador Aéreo',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo consolidador aéreo ha sido cerrado');
    });

  }

  showModal5() {

    const dialogRef = this.modalService.openDialog(
      NewAirlineComponent,
      'Nueva Aerolínea',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo aerolínea ha sido cerrado');
    });

  }
  showModal6() {

    const dialogRef = this.modalService.openDialog(
      NewGroundtransportComponent,
      'Nuevo Terrestre',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo terrestre ha sido cerrado');
    });

  }

  showModal7() {

    const dialogRef = this.modalService.openDialog(
      NewDriverComponent,
      'Nuevo Chofer',
      '800px',
      '500px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo chofer ha sido cerrado');
    });

  }
}
