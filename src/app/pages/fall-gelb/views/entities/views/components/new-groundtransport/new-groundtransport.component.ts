import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-groundtransport',
  templateUrl: './new-groundtransport.component.html',
  styleUrls: ['./new-groundtransport.component.scss']
})
export class NewGroundtransportComponent implements OnInit {

  groundtransportForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    email: this.fb.control("")
   })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
