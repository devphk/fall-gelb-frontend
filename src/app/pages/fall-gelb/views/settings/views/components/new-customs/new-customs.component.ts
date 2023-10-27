import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-customs',
  templateUrl: './new-customs.component.html',
  styleUrls: ['./new-customs.component.scss']
})
export class NewCustomsComponent {


  customsForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    phone: this.fb.control(""),
    transport: this.fb.control(""),
    location: this.fb.control("")
  })

  transportType: string[] = ['Marítimo', 'Aéreo', 'Terrestre'];
  
  constructor( private fb:FormBuilder ) { }

  showForm() {
    console.log("value: ", this.customsForm.get('transport')!.value);
  }



}
