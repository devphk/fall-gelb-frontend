import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-certification',
  templateUrl: './form-certification.component.html',
  styleUrls: ['./form-certification.component.scss'],
})
export class FormCertificationComponent implements OnInit {
  constructor(private formBuild: FormBuilder) {}

  certificationForm: FormGroup = this.formBuild.group({
    client: this.formBuild.control(''),
    record: this.formBuild.control(''),
    purchaseOrder: this.formBuild.control(''),
    advancePaymentDate: this.formBuild.control(''),
    advancePayment: this.formBuild.control(''),
    advancePaymentNumber: this.formBuild.control(''),
  });
  ngOnInit(): void {}
}
