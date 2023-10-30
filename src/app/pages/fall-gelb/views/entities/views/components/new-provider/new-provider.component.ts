import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.scss']
})
export class NewProviderComponent implements OnInit {

  providerForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    phone: this.fb.control(""),
    national: this.fb.control(""),
    active: this.fb.control(""),
    address: this.fb.control(""),
    specialTaxpayer: this.fb.control(""),
    iva: this.fb.control(""),
    taxpayerType: this.fb.control(""),
    providerType: this.fb.control(""),
    rif: this.fb.control(""),
    providerCard: this.fb.control(""),
    rifPDF: this.fb.control(""),
    ofac: this.fb.control(""),
    license: this.fb.control(""),
    bank: this.fb.control(""),
    ci: this.fb.control(""),
    ofacCheck: this.fb.control(""),
    registry: this.fb.control(""),
    doc: this.fb.control(""),
    islr: this.fb.control(""),
    permises: this.fb.control("")
  });

  nationaltrigger:boolean = true;
  yesNoOptions: string[] = [
    "Si",
    "No"
  ];

  taxpayerTypeOptions: string[] = [
    "Juridico",
    "Natural",
    "Gubernamental"
  ];

  providerTypeOptions: string[] = [
    "Operativo",
    "Prestador de servicios",
    "Administrativo"
  ];

  changeNational() {

    // if(this.nationaltrigger === true){
    //   this.nationaltrigger = false;
    //   console.log("toggle on");
    // }else{
    //   this.nationaltrigger = true;
    //   console.log("toggle off");
    // }
    

  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
