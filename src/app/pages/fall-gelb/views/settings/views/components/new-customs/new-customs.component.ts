import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomsService } from '../../customs/customs.service';
import { Customs, CustomsExport, Transporttype } from '../../../../../../../shared/models/Customs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-customs',
  templateUrl: './new-customs.component.html',
  styleUrls: ['./new-customs.component.scss']
})
export class NewCustomsComponent implements OnInit{
  
  
  customsForm: FormGroup = this.fb.group({
    name: this.fb.control("", Validators.required),
    address: this.fb.control(""),
    transport_types: this.fb.control(""),
    latitude: this.fb.control(""),
    longitude: this.fb.control(""),
    // location: this.fb.control("")
  })
  
  durationInSeconds = 2;
  // valueTranspType: Transporttype[] = []
  selectedTypes: any[] = [];

  transportType: Transporttype[] = [];
  
  constructor( private fb:FormBuilder, 
               private customsService:CustomsService,
               private snackBar:MatSnackBar,
               private matDialog:MatDialogRef<NewCustomsComponent>,
               @Inject(MAT_DIALOG_DATA) private dataEdit: CustomsExport) { }

  customForm: FormControl = new FormControl();

  ngOnInit(): void {
    
    
    // console.log(this.dataEdit);
    
    if(this.dataEdit.title === 'Editar Aduana') {
        this.customsForm.patchValue({
            name: this.dataEdit.info.name,
            address: this.dataEdit.info.address,
            transport_types: this.selectedTypes,
            latitude: this.dataEdit.info.latitude,
            longitude: this.dataEdit.info.longitude
          })
        }
        
    const transportTypeIds = [];

    if (this.dataEdit && this.dataEdit.info && this.dataEdit.info.transport_types) {
      for (let i = 0; i < this.dataEdit.info.transport_types.length; i++) {
          transportTypeIds.push(this.dataEdit.info.transport_types[i].id);
      }
    }
    
    this.selectedTypes = transportTypeIds;

    console.log('selectedTypes:  ',this.selectedTypes);

    this.customForm = new FormControl(this.selectedTypes);

    this.customsService
      .getCustoms()
        .subscribe((resp) => {
          resp.map((resp) => {
            resp.transport_types.map((transport_type) => {
              const index = this.transportType.findIndex(obj => obj.id === transport_type.id);
              // Si el objeto no está en la matriz, agregarlo
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
     console.log('transportType: ', this.transportType);
  }

  openSnackBar(type:number){
    if(type === 1) {
      this.snackBar.open('Agregado Exitosamente!','Close',{
        duration: this.durationInSeconds * 1000,
        panelClass: ['success-snackbar']
      });
    }else{
      this.snackBar.open('Ha ocurrido un Error!','Close',{
        duration: this.durationInSeconds * 1000,
        panelClass: ['error-snackbar']
      });
    }
  }

  onSubmit(formData:any) {
    if(this.customsForm.valid) {
      console.log('VÁLIDO');
      this.openSnackBar(1);
      // this.customsService
      // .postCustoms(formData)
      // .subscribe(
      //   (data) => {
      //       console.log('EXITOSO! :', data)
      //       this.matDialog.close();
      //   },
      //     (error) => {
      //       console.error('ERROR! :', error)
      //     }
      //   )
    }else {
      this.openSnackBar(2);
      console.log('INVÁLIDO');
    }
  }  
  
}
