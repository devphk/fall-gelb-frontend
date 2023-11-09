import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { ConfigsService } from '../../configs/configs.service';

@Component({
  selector: 'app-form-configs',
  templateUrl: './form-configs.component.html',
  styleUrls: ['./form-configs.component.scss']
})
export class FormConfigsComponent implements OnInit {

  configForm: FormGroup = this.fb.group({
    key: this.fb.control(this.data.dialogData ? this.data.dialogData[0].key : '', [Validators.required]),
    value: this.fb.control(this.data.dialogData ? this.data.dialogData[0].value : '', [Validators.required]),
    slide: this.fb.control(this.data.dialogData ? this.data.dialogData[0].deletable : false,),
  })
  
  constructor( private fb:FormBuilder,
               private configService: ConfigsService,
               private dialogRef:MatDialogRef<FormConfigsComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
    console.log('Data: ', this.data)
  }
  
  saveConfigs() {
    if (this.configForm.valid) {
      if(this.data.title === 'Crear Configuración'){

        const config = {
          key: this.configForm.get('key')?.value, 
          value: this.configForm.get('value')?.value,  
          deletable: this.configForm.get('slide')?.value, 
        }
          console.log('Config: ', config)

        this.configService.createConfig(config)
          .subscribe((data) => {
            this.toastService.showToaster("Configuración Creada Correctamente!")
            this.dialogRef.close(true);
          },
                    (error) => console.error('ERROR! :', error))

      }else{

        const editConfig = {
          key: this.configForm.get('key')?.value, 
          value: this.configForm.get('value')?.value, 
          deletable: this.configForm.get('slide')?.value 
        }
  
        this.configService.editConfig(editConfig, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Configuración Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.configForm.markAllAsTouched();

    }
  }

}
