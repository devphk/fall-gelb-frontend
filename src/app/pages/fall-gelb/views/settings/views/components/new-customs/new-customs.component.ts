import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomsService } from '../../customs/customs.service';
import { Customs, Transporttype } from '../../../../../../../shared/models/Customs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  transportType: Transporttype[] = [];
  
  constructor( private fb:FormBuilder, 
               private customsService:CustomsService,
               private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.customsService
      .getCustoms()
      .subscribe((resp) => {
        resp.map((resp) => {
          resp.transport_types.map((transport_type) => {this.transportType.push({
            id: transport_type.id,
            name: transport_type.name,
            code: transport_type.code
          })})
          // console.log('transportType: ', this.transportType);
        })
      })
  }
  durationInSeconds = 2;

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
      this.customsService
        .postCustoms(formData)
        .subscribe(
          data => console.log('EXITOSO! :', data),
          error => console.error('ERROR! :', error)
        )
    }else {
      this.openSnackBar(2);
      console.log('INVÁLIDO');
    }
  }  
  
}
