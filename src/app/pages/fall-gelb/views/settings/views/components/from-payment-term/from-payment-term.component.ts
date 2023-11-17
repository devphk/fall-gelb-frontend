import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-from-payment-term',
  templateUrl: './from-payment-term.component.html',
  styleUrls: ['./from-payment-term.component.scss'],
})
export class FromPaymentTermComponent implements OnInit {
  paymentTermForm!: FormGroup;
  isEditMode: boolean = false;

  banckFrom: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FromPaymentTermComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService
  ) {}

  get paymentTermControls(): FormArray {
    return this.paymentTermForm.get('paymentTerm') as FormArray;
  }

  addPaymentTerm() {
    const paymentTermForm = this.fb.group({
      days: this.fb.control('', [Validators.required]),
      percentage: this.fb.control('', [Validators.required]),
    });

    this.paymentTermControls.push(paymentTermForm);
    console.log(this.paymentTermControls.length);
    console.log(
      this.paymentTermControls.controls[
        this.paymentTermControls.length - 1
      ].getRawValue().day
    );
  }

  deletePaymentTerm(paymentTermIndex: number) {
    this.paymentTermControls.removeAt(paymentTermIndex);
  }

  initializeForm() {
    this.banckFrom = this.fb.group({
      name: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
    });
  }
  ngOnInit(): void {
    this.paymentTermForm = this.fb.group({
      paymentTerm: this.fb.array([]),
    });
    this.addPaymentTerm();
    this.initializeForm();
  }
}
