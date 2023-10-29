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
    dir: this.fb.control(""),
    rifPDF: this.fb.control(""),
    taxpayer: this.fb.control(""),
    biller: this.fb.control(""),
    time: this.fb.control("")
  });

  taxpayerOptions: string[] = ['Si', 'No'];

  billerOptions: string[] = ['SDN', 'PHOINIKEL'];

  timeOptions: string[] = ['5 días antes', '10 días antes', 'Al Momento de la Llegada de la Mercancía']

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
