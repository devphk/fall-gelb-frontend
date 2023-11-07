import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomsService } from '../../customs/customs.service';
import { Transporttype } from '@shared/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-new-customs',
  templateUrl: './new-customs.component.html',
  styleUrls: ['./new-customs.component.scss']
})
export class NewCustomsComponent implements OnInit{


  customsForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '',),
    transport_types: this.fb.control(""),
    longitude: this.fb.control(this.data.dialogData ? this.data.dialogData[0].longitude : '',),
    latitude: this.fb.control(this.data.dialogData ? this.data.dialogData[0].latitude : '',)
  })
  transportType: Transporttype[] = [];
  selectedTypes: Transporttype[] = [];

  customForm: FormControl = new FormControl();


  
  constructor( private fb:FormBuilder,
               private customsService:CustomsService,
               private dialogRef:MatDialogRef<NewCustomsComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
    this.getTranspTypes();
    this.getSelectedTransType();
  }

  getTranspTypes() {
    this.customsService
      .getCustoms()
        .subscribe((resp) => {
          resp.map((resp) => {
            resp.transport_types.map((transport_type) => {

              const index = this.transportType.findIndex(obj => obj.id === transport_type.id);
              
              if (index === -1) {
                this.transportType.push({
                  id: transport_type.id,
                  name: transport_type.name,
                  code: transport_type.code
              });
            }
          });
      });
    });
  }

  getSelectedTransType() {
    const transportTypeIds = [];

    if (this.data && this.data.dialogData && this.data.dialogData[0].transport_types) {
      for (let i = 0; i < this.data.dialogData[0].transport_types.length; i++) {
          transportTypeIds.push(this.data.dialogData[0].transport_types[i].id);
      }
    }
    
    this.selectedTypes = transportTypeIds;

    this.customForm = new FormControl(this.selectedTypes);
  }

  saveCustoms() {
    if (this.customsForm.valid) {
      if(this.data.title === 'Crear Aduana'){

        const custom = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.customsForm.get('latitude')?.value,
          longitude: this.customsForm.get('longitude')?.value,
          transport_types: this.customForm.value,  
        }
  
        this.customsService.createCustom(custom)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const customEdit = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.customsForm.get('latitude')?.value,
          longitude: this.customsForm.get('longitude')?.value,
          transport_types: this.customForm.value,
   
        }
  
        this.customsService.editCustom(customEdit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.customForm.markAllAsTouched();

    }
  }
}




