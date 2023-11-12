import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { CargoTypeLclService } from '../../cargo-type-lcl/cargo-type-lcl.service';

@Component({
  selector: 'app-form-cargo-type-lcl',
  templateUrl: './form-cargo-type-lcl.component.html',
  styleUrls: ['./form-cargo-type-lcl.component.scss']
})
export class FormCargoTypeLclComponent implements OnInit {

  cargoTypeLCLForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private dialogRef:MatDialogRef<FormCargoTypeLclComponent>,
               private lclCargoService: CargoTypeLclService,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
  }

  saveCargoType() {
    if (this.cargoTypeLCLForm.valid) {
      if(this.data.title === 'Crear Tipo de Carga LCL'){

        const lclType = {
          name: this.cargoTypeLCLForm.get('name')?.value,   
        }
          console.log('lclType: ', lclType)
        this.lclCargoService.createCargoLCL(lclType)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Carga LCL Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editCargoType = {
          name: this.cargoTypeLCLForm.get('name')?.value, 
        }
  
        this.lclCargoService.editCargoLCL(editCargoType, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Carga LCL Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.cargoTypeLCLForm.markAllAsTouched();

    }
  }

}
