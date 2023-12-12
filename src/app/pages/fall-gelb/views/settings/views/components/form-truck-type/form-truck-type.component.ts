import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { TruckTypeService } from '../../truck-type/truck-type.service';

@Component({
  selector: 'app-new-truck-type',
  templateUrl: './form-truck-type.component.html',
  styleUrls: ['./form-truck-type.component.scss']
})
export class FormTruckTypeComponent implements OnInit {

  truckTypeForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private truckTypeService:TruckTypeService,
               private dialogRef:MatDialogRef<FormTruckTypeComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void { 
  }
  
  saveTrucks() {
    if (this.truckTypeForm.valid) {
      if(this.data.title === 'Crear Tipo de Camión'){

        const truck = {
          name: this.truckTypeForm.get('name')?.value,   
        }
          console.log('truck: ', truck)
        this.truckTypeService.createTruckType(truck)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Camión Creado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editTruck = {
          name: this.truckTypeForm.get('name')?.value,
        }
  
        this.truckTypeService.editTruckType(editTruck, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Camión Editado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.truckTypeForm.markAllAsTouched();

    }
  }

}
