import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bank-account',
  templateUrl: './form-bank-account.component.html',
  styleUrls: ['./form-bank-account.component.scss'],
})
export class FormBankAccountComponent implements OnInit {
  constructor(private formBuild: FormBuilder) {}
  bankAccountForm: FormGroup = this.formBuild.group({
    bank: this.formBuild.control(''),
    numberAccount: this.formBuild.control(''),
    currency: this.formBuild.control(''),
    priority: this.formBuild.control(''),
    isVisible: this.formBuild.control(''),
  });

  isVisibleTrigger: boolean = true;
  bankOptions: string[] = ['Option 1', 'Option 2'];
  currencyOptions: string[] = ['Option 1', 'Option 2'];

  ngOnInit(): void {}

  changeisVisible() {
    if (this.isVisibleTrigger === true) {
      this.isVisibleTrigger = false;
      console.log('toggle on');
    } else {
      this.isVisibleTrigger = true;
      console.log('toggle off');
    }
  }
}
