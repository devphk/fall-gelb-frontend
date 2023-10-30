import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services';
import { PhkInputComponent } from 'src/app/shared/components/phk-input/phk-input.component';
import { TestComponent } from 'src/app/shared/components/test/test.component';
import { NewCustomerComponent } from '../entities/components/new-customer/new-customer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  form: FormGroup = this.fb.group({
    control: this.fb.control(''),
  });

  tableColumnsToDisplay: string[] = ['Usuario', 'Rol', 'Correo', 'Teléfono'];

  tableColumnsTags: string[] = ['userName', 'role', 'email', 'phone'];

  tableData: any[] = [
    {
      userName: 'Agreda',
      role: 'Administrador',
      email: 'jagreda@gmail.com',
      phone: '04127527692',
    },
    {
      userName: 'Gabriel',
      role: 'Administrador',
      email: 'gdavila@gmail.com',
      phone: '04127527692',
    },
    {
      userName: 'Gianfranco',
      role: 'Administrador',
      email: 'abinassar@gmail.com',
      phone: '04127527692',
    },
  ];

  itemsSelected: any[] = [];

  infoAuxi: any = {
    subTittle: 'One',
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    extraInfo:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati quibusdam dolore magni placeat eum eligendi deserunt? A delectus voluptatem ipsum nihil ut repellendus aliquid, aut temporibus sed ipsam quidem?',
    tittle: 'inu',
  };

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit(): void {}

  showItems() {
    console.log('items ', this.itemsSelected);
  }

  showForm() {
    console.log('this.form: ', this.form);
    console.log('value: ', this.form.get('control')!.value);
  }

  deleteItem() {
    this.tableData.shift();
    console.log('data ', this.tableData);
  }

  showModal() {
    const dialogRef = this.modalService.openDialog(
      NewCustomerComponent,
      'Título del Diálogo',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado');
    });
  }
}
