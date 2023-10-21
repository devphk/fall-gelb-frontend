import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services';
import { PhkInputComponent } from 'src/app/shared/components/phk-input/phk-input.component';
import { TestComponent } from 'src/app/shared/components/test/test.component';
import { NewCustomerComponent } from '../entities/components/new-customer/new-customer.component';
import { defaultTableColumnsTags, defaultTableColumnsToDisplay, defaultTableData } from 'src/app/shared/models/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup = this.fb.group({
    control: this.fb.control("")
  });

  tableColumnsToDisplay: string[] = defaultTableColumnsToDisplay;
  tableColumnsTags: string[] = defaultTableColumnsTags;
  tableData: any[] = defaultTableData;
  itemsSelected: any[] = [];

  constructor(private fb: FormBuilder,
              private modalService: ModalService) { }

  ngOnInit(): void {
  }

  showItems() {
    console.log("items ", this.itemsSelected)
  }

  showForm() {
    console.log("this.form: ", this.form)
    console.log("value: ", this.form.get('control')!.value)
  }

  addItem() {
    let item = {
      userName: "Parra",
      role: "Administrador",
      email: "jparra@gmail.com",
      phone: "04127527692"
    }
    this.tableData.push();
  }

  deleteItem() {
    this.tableData.shift();
    console.log("data ", this.tableData)
  }

  showModal() {

    const dialogRef = this.modalService.openDialog(
      NewCustomerComponent,
      'Título del Diálogo',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
    });

  }

}
