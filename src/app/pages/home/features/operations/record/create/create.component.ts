import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  formgruoup: FormGroup = this.formBuilder.group({
    client: this.formBuilder.control(''),
    analystClient: this.formBuilder.control(''),
    orderPayment: this.formBuilder.control(''),
    guideBl: this.formBuilder.control(''),
    merchandise: this.formBuilder.control(''),
    dateEta: this.formBuilder.control(''),
    analystPhk: this.formBuilder.control(''),
    analystClosePhk: this.formBuilder.control(''),
    recrodPhk: this.formBuilder.control(''),
    recordSdn: this.formBuilder.control(''),
    biller: this.formBuilder.control(''),
    serviceType: this.formBuilder.control(''),
    transportType: this.formBuilder.control(''),
    transportCompany: this.formBuilder.control(''),
    port: this.formBuilder.control(''),
    loadType: this.formBuilder.control(''),
    container20: this.formBuilder.control(''),
    container40: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
