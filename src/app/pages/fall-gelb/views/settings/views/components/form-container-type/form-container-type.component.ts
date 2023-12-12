import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContainerTypeService } from '../../container-type/container-type.service';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-container-type',
  templateUrl: './form-container-type.component.html',
  styleUrls: ['./form-container-type.component.scss']
})
export class FormContainerTypeComponent implements OnInit {

  containerTypeForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private dialogRef:MatDialogRef<FormContainerTypeComponent>,
               private containerTypeService:ContainerTypeService,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
  }

  saveContainerType() {
    if (this.containerTypeForm.valid) {
      if(this.data.title === 'Crear Tipo de Contenedor'){

        const container = {
          name: this.containerTypeForm.get('name')?.value,  
        }
          console.log('container: ', container)
        this.containerTypeService.createContainerType(container)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Contenedor Creado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editContainer = {
          name: this.containerTypeForm.get('name')?.value, 
        }
  
        this.containerTypeService.editContainerType(editContainer, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Container Editado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.containerTypeForm.markAllAsTouched();
      console.log('INVALIDO')
    }
  }

}
