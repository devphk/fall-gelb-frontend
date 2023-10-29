import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.scss']
})
export class NewDriverComponent implements OnInit {

  driverForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    doc: this.fb.control(""),
    phone: this.fb.control(""),
    email: this.fb.control(""),
    username: this.fb.control(""),
    password: this.fb.control(""),
    confirmpassword: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
