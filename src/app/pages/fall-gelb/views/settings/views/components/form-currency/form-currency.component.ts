import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
})
export class FormCurrencyComponent implements OnInit {
  constructor(private formBuild: FormBuilder) {}
  currencyFrom: FormGroup = this.formBuild.group({
    code: this.formBuild.control(''),
    description: this.formBuild.control(''),
  });
  ngOnInit(): void {}

  showForm() {
    console.log('this.form: ', this.currencyFrom);
    console.log('value: ', this.currencyFrom.get('control')!.value);
  }
}
