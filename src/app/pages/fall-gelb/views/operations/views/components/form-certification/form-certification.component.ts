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
    record_id: this.formBuild.control(''),
    purchase_order: this.formBuild.control(''),
    advance_payment_date: this.formBuild.control(''),
    advance_payment: this.formBuild.control(''),
    advance_payment_number: this.formBuild.control(''),
  });

  recrodOptions: string[] = ['PHK-22-0203 - adua', 'PHK-22-176 - adua'];

  clienteOptions: string[] = [
    'CERVECERIA POLAR, C.A.',
    'PEPSI-COLA VENEZUELA, C.A.',
  ];

  ngOnInit(): void {}
}
