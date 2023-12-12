import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { WarehouseService } from '../../warehouse/warehouse.service';

@Component({
  selector: 'app-form-warehouse',
  templateUrl: './form-warehouse.component.html',
  styleUrls: ['./form-warehouse.component.scss']
})
export class FormWarehouseComponent implements OnInit {

  warehouseForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private warehouseService:WarehouseService,
               private dialogRef:MatDialogRef<FormWarehouseComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
  }
  
  saveWarehouse() {
    if (this.warehouseForm.valid) {
      if(this.data.title === 'Crear Almacén'){

        const warehouse = {
          name: this.warehouseForm.get('name')?.value, 
          address: this.warehouseForm.get('address')?.value,   
        }
        this.warehouseService.createWarehouse(warehouse)
          .subscribe((data) => {
            this.toastService.showToaster("Almacén Creado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editWarehouse = {
          name: this.warehouseForm.get('name')?.value, 
          address: this.warehouseForm.get('address')?.value, 
        }
  
        this.warehouseService.editWarehouse(editWarehouse, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Almacén Editado Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.warehouseForm.markAllAsTouched();

    }
  }

}
