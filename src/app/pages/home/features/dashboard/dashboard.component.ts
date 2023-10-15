import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services';
import { PhkInputComponent } from 'src/app/shared/components/phk-input/phk-input.component';
import { TestComponent } from 'src/app/shared/components/test/test.component';

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
    // this.modalService.open({
    //   component: PhkInputComponent,
    //   title: 'Administration'
    // },
    // { 
    //   minWidth: 40, 
    //   maxWidth: 55 
    // });

    const dialogRef = this.modalService.openDialog(
      TestComponent,
      'Título del Diálogo',
      '500px',
      '300px'
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado');
      // Aquí puedes realizar acciones después de que el diálogo se haya cerrado.
    });

  }

  

}
