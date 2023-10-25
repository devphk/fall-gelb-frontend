import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.scss'],
})
export class FormRecordComponent implements OnInit {
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
    customsAgent: this.formBuilder.control(''),
    serviceType: this.formBuilder.control(''),
    transportType: this.formBuilder.control(''),
    transportCompany: this.formBuilder.control(''),
    port: this.formBuilder.control(''),
    loadType: this.formBuilder.control(''),
    container20: this.formBuilder.control(''),
    container40: this.formBuilder.control(''),
    transportActive: this.formBuilder.control(''),
  });

  transportActive: boolean = false;
  clientOptions: string[] = ['Option 1', 'Option 2'];
  analystClientOptions: string[] = ['Option 1', 'Option 2'];
  analystPhkOptions: string[] = ['Option 1', 'Option 2'];
  analystClosePhkOptions: string[] = ['Option 1', 'Option 2'];
  billerOptions: string[] = ['Option 1', 'Option 2'];
  customsAgentOptions: string[] = ['Option 1', 'Option 2'];
  serviceTypeOptions: string[] = ['Option 1', 'Option 2'];
  transportTypeOptions: string[] = ['Option 1', 'Option 2'];
  transportCompanyOptions: string[] = ['Option 1', 'Option 2'];
  portOptions: string[] = ['Option 1', 'Option 2'];
  loadTypeOptions: string[] = ['Option 1', 'Option 2'];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}
}
