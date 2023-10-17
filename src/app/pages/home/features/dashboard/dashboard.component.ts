import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services';
import { PhkInputComponent } from 'src/app/shared/components/phk-input/phk-input.component';
import { TestComponent } from 'src/app/shared/components/test/test.component';
import { NewCustomerComponent } from '../entities/components/new-customer/new-customer.component';
import { EntitiesComponent } from '../entities/entities.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup = this.fb.group({
    control: this.fb.control("")
  })

  constructor(private fb: FormBuilder,
              private modalService: ModalService) { }

  ngOnInit(): void {
  }

  showForm() {
    console.log("this.form: ", this.form)
    console.log("value: ", this.form.get('control')!.value)
  }

  showModal() {

    const dialogRef = this.modalService.openDialog(
      EntitiesComponent,
      'Título del Diálogo',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });

  }

}
