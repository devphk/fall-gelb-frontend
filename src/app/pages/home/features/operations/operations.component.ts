import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services';
import { CreateComponent } from './record/create/create.component';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {
  form: FormGroup = this.fb.group({
    control: this.fb.control(''),
    type: this.fb.control(''),
  });

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit(): void {}

  showForm() {
    console.log('this.form: ', this.form);
    console.log('value: ', this.form.get('control')!.value);
  }

  showModalCreate() {
    const dialogRef = this.modalService.openDialog(
      CreateComponent,
      'Título del Diálogo',
      '800px',
      '300px'
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado');
    });
  }
}
