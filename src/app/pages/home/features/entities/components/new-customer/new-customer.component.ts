import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  customerForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    phone: this.fb.control(""),
    rif: this.fb.control(""),
    active: this.fb.control(""),
    reminder: this.fb.control(""),
    address: this.fb.control(""),
    rifPDF: this.fb.control(""),
    taxpayer: this.fb.control(""),
    biller: this.fb.control(""),
    advance: this.fb.control("")
   })
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
