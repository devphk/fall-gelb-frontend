import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-truck-type',
  templateUrl: './new-truck-type.component.html',
  styleUrls: ['./new-truck-type.component.scss']
})
export class NewTruckTypeComponent implements OnInit {

  truckTypeForm: FormGroup = this.fb.group({
    name: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
