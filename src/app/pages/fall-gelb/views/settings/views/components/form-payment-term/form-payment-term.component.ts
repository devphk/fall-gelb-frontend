import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { PaymentTermService } from '../../payment-term/payment-term.service';
import {
  PaymenTermResponse,
  PaymentTermPost,
} from '@shared/models/payment-term';

@Component({
  selector: 'app-form-payment-term',
  templateUrl: './form-payment-term.component.html',
  styleUrls: ['./form-payment-term.component.scss'],
})
export class FormPaymentTermComponent implements OnInit {
  paymentTermItemForm: FormGroup = new FormGroup({});
  paymentTermForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormPaymentTermComponent>,
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
    this.addPaymentTermItem(
      this.data.dialogData ? this.data.dialogData[0].id : null
    );
  }

  addPaymentTermItem(dataEdit?: number) {
    let paymentTermItemForm;
    if (dataEdit) {
      this.paymentTermService
        .getPaymenTerm(dataEdit)
        .subscribe((paymenTermResponse) => {
          paymenTermResponse.payment_term_items.map((payment_term_item) => {
            paymentTermItemForm = this.fb.group({
              days: this.fb.control(payment_term_item.days, [
                Validators.required,
              ]),
              percentage: this.fb.control(payment_term_item.percentage, [
                Validators.required,
              ]),
            });
            this.paymentTermControls.push(paymentTermItemForm);
          });
        });
    } else {
      paymentTermItemForm = this.fb.group({
        days: this.fb.control('', [Validators.required]),
        percentage: this.fb.control('', [Validators.required]),
      });

      if (this.getTotalPercent() < 100) {
        this.paymentTermControls.push(paymentTermItemForm);
      }
    }
  }

  deletePaymentTermItem(paymentTermIndex: number) {
    if (this.paymentTermControls.length !== 1) {
      this.paymentTermControls.removeAt(paymentTermIndex);
    }
  }

  savePaymentTerm() {
    if (this.getTotalPercent() === 100) {
      console.log('a');
      // if (this.data.title === 'Crear Terminos de Pago') {
      //   const paymentTerm: PaymentTermPost = {
      //     name: this.paymentTermForm.get('name')?.value,
      //     items: this.paymentTermControls.getRawValue(),
      //   };
      //   this.paymentTermService.createPaymenTerm(paymentTerm).subscribe(
      //     (data) => {
      //       this.toastService.showToaster(
      //         'Terminos de Pago Creado Correctamente!'
      //       );
      //       this.dialogRef.close(true);
      //     },
      //     (error) => this.toastService.showToaster(error.error.message, true)
      //   );
      // } else {
      //   const paymentTermEdit = {
      //     name: this.paymentTermForm.get('name')?.value,
      //     items: this.paymentTermControls.getRawValue(),
      //   };

      //   this.paymentTermService
      //     .editPaymenTerm(paymentTermEdit, this.data.dialogData[0].id)
      //     .subscribe(
      //       (data) => {
      //         this.toastService.showToaster(
      //           'Terminos de Pago Editado Correctamente!'
      //         );
      //         this.dialogRef.close(true);
      //       },
      //       (error) => this.toastService.showToaster(error.error.message, true)
      //     );
      // }
    } else {
      if (this.getTotalPercent() < 100) {
        this.toastService.showToaster(
          'El porcentage no completa el 100%',
          true
        );
        console.log('El porcentage no completa el 100%');
      } else if (this.getTotalPercent() > 100) {
        this.toastService.showToaster('El porcentage supera el 100%', true);
        console.log('El porcentage supera el 100%');
      }
    }
  }
  getTotalPercent() {
    let percent: number = 0;
    this.paymentTermControls.getRawValue().map((dataPayentTerm: any) => {
      percent = Number(dataPayentTerm.percentage) + percent;
    });

    return percent;
  }
}
