import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { UnitsService } from '../../units/units.service';

@Component({
  selector: 'app-new-units',
  templateUrl: './new-units.component.html',
  styleUrls: ['./new-units.component.scss']
})
export class NewUnitsComponent implements OnInit {

  unitsForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
  })
  
  constructor( private fb:FormBuilder,
               private dialogRef:MatDialogRef<NewUnitsComponent>,
               private unitsService:UnitsService,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
  }

  saveUnits() {
    if (this.unitsForm.valid) {
      if(this.data.title === 'Crear Unidad'){

        const unit = {
          name: this.unitsForm.get('name')?.value,  
        }
          console.log('unit: ', unit)
        this.unitsService.createUnit(unit)
          .subscribe((data) => {
            this.toastService.showToaster("Unidad Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const editUnit = {
          name: this.unitsForm.get('name')?.value, 
        }
  
        this.unitsService.editUnit(editUnit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Unidad Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.unitsForm.markAllAsTouched();

    }
  }

}
