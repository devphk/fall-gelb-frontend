import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { CommodityTypeService } from '../../commodity-type/commodity-type.service';

@Component({
  selector: 'app-form-commodity-type',
  templateUrl: './form-commodity-type.component.html',
  styleUrls: ['./form-commodity-type.component.scss']
})
export class FormCommodityTypeComponent implements OnInit {

  commodityTypeForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    
  })

  
  constructor( private fb:FormBuilder,
               private commoditiesService:CommodityTypeService,
               private dialogRef:MatDialogRef<FormCommodityTypeComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {

  }
  
  saveCommodity() {
    if (this.commodityTypeForm.valid) {
      if(this.data.title === 'Crear Tipo de Mercancia'){

        const commodity = {
          name: this.commodityTypeForm.get('name')?.value, 
        }
        console.log(commodity)

        this.commoditiesService.createCommodity(commodity)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Mercancia Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }else{

        const commodityEdit = {
          name: this.commodityTypeForm.get('name')?.value, 
        }
        console.log(commodityEdit)
  
        this.commoditiesService.editCommodity(commodityEdit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Tipo de Mercancia Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.commodityTypeForm.markAllAsTouched();

    }
  }
}
