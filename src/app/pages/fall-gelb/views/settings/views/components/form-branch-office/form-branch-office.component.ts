import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { BranchOfficesService } from '../../branch-offices/branch-offices.service';

@Component({
  selector: 'app-form-branch-office',
  templateUrl: './form-branch-office.component.html',
  styleUrls: ['./form-branch-office.component.scss']
})
export class FormBranchOfficeComponent implements OnInit {

  branchOfficeForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private dialogRef:MatDialogRef<FormBranchOfficeComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService,
               private branchOfficeService: BranchOfficesService) {}

  
  ngOnInit(): void {
  }
  
  saveBranchOffice() {
    if (this.branchOfficeForm.valid) {
      if(this.data.title === 'Crear Sucursal'){

        const branchOffice = {
          name: this.branchOfficeForm.get('name')?.value, 
          address: this.branchOfficeForm.get('address')?.value,   
        }
        this.branchOfficeService.createBranchOffices(branchOffice)
          .subscribe((data) => {
            this.toastService.showToaster("Sucursal Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editBranchOffice = {
          name: this.branchOfficeForm.get('name')?.value, 
          address: this.branchOfficeForm.get('address')?.value, 
        }
  
        // this.warehouseService.editWarehouse(editWarehouse, this.data.dialogData[0].id)
        //   .subscribe((data) => {
        //     this.toastService.showToaster("Almacén Editado Correctamente!")
        //     this.dialogRef.close(true);
        //   },
        //              (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.branchOfficeForm.markAllAsTouched();
      console.log('Invalido: ', this.branchOfficeForm)

    }
  }

}
