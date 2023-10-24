import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-shippingcompany',
  templateUrl: './new-shippingcompany.component.html',
  styleUrls: ['./new-shippingcompany.component.scss']
})
export class NewShippingcompanyComponent implements OnInit {

  shippingCompanyForm: FormGroup = this.fb.group({
    name: this.fb.control("")
   })

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
