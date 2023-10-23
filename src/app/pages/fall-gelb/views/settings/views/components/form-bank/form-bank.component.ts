import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-bank',
  templateUrl: './form-bank.component.html',
  styleUrls: ['./form-bank.component.scss'],
})
export class FormBankComponent implements OnInit {
  constructor(private formBuild: FormBuilder) {}

  banckFrom: FormGroup = this.formBuild.group({
    name: this.formBuild.control(''),
  });

  ngOnInit(): void {}

  showForm() {
    console.log('this.form: ', this.banckFrom);
    console.log('value: ', this.banckFrom.get('control')!.value);
  }
}
