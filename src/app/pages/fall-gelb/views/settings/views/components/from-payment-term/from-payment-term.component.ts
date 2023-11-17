import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { PaymentTermService } from '../../payment-term/payment-term.service';

@Component({
  selector: 'app-from-payment-term',
  templateUrl: './from-payment-term.component.html',
  styleUrls: ['./from-payment-term.component.scss'],
})
export class FromPaymentTermComponent implements OnInit {
  paymentTermItemForm: FormGroup = new FormGroup({});
  paymentTermForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FromPaymentTermComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService,
    private paymentTermService: PaymentTermService
  ) {}

  get paymentTermControls(): FormArray {
    return this.paymentTermItemForm.get('paymentTerm') as FormArray;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.paymentTermItemForm = this.fb.group({
      paymentTerm: this.fb.array([]),
    });
    this.paymentTermForm = this.fb.group({
      name: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
    });

    this.addPaymentTermItem(this.data.dialogData);
  }

  addPaymentTermItem(dataEdit?: []) {
    const paymentTermItemForm = this.fb.group({
      days: this.fb.control('', [Validators.required]),
      percentage: this.fb.control('', [Validators.required]),
    });

    this.paymentTermControls.push(paymentTermItemForm);
    console.log(this.paymentTermControls.length);
    console.log(
      this.paymentTermControls.controls[
        this.paymentTermControls.length - 1
      ].getRawValue().day
    );
  }

  deletePaymentTermItem(paymentTermIndex: number) {
    if (this.paymentTermControls.length == 1) {
    } else {
      this.paymentTermControls.removeAt(paymentTermIndex);
    }
  }

  savePaymentTerm() {
    if (this.paymentTermForm.valid) {
      if (this.data.title === 'Crear Banco') {
        const paymentTerm = {
          name: this.paymentTermForm.get('name')?.value,
        };

        this.paymentTermService.createPaymenTerm(paymentTerm).subscribe(
          (data) => {
            this.toastService.showToaster('Banco Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const paymentTermEdit = {
          name: this.paymentTermForm.get('name')?.value,
        };

        this.paymentTermService
          .editPaymenTerm(paymentTermEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Banco Editado Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.paymentTermForm.markAllAsTouched();
    }
  }
}
