import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-customs',
  templateUrl: './new-customs.component.html',
  styleUrls: ['./new-customs.component.scss']
})
export class NewCustomsComponent {

  active1:boolean = false;
  active2:boolean = false;

  customsForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    phone: this.fb.control(""),
    transportType: this.fb.control(""),
    transportType2: this.fb.control(""),
    transportType3: this.fb.control(""),
    location: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  showForm() {
    console.log("value: ", this.customsForm.get('transportType')!.value);
  }

  setActive(){
    if(this.active1===false){
      this.active1 = true;
    }else if(this.active1 === true && this.active2 ===false ) {
      this.active2 = true;
    }
  }

  setUnactive() {
    if(this.active2 === true){
      this.active2 = false;
    }else if( this.active2 === false && this.active1 === true) {
      this.active1 = false;
    }
  }


}
