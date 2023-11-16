import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { CurrencyService } from '../../currency/currency.service';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
})
export class FormCurrencyComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormCurrencyComponent>,
    private currencyService: CurrencyService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  isEditMode: boolean = false;

  currencyForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.currencyForm = this.formBuild.group({
      name: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
      code: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].code : '',
        [Validators.required]
      ),
      decimals: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].decimals : '',
        [Validators.required]
      ),
    });
  }

  saveCurrency() {
    if (this.currencyForm.valid) {
      if (this.data.title === 'Crear Moneda') {
        const bank = {
          name: this.currencyForm.get('name')?.value,
          code: this.currencyForm.get('code')?.value,
          decimals: this.currencyForm.get('decimals')?.value,
        };

        this.currencyService.createCurrency(bank).subscribe(
          (data) => {
            this.toastService.showToaster('Moneda Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const bankEdit = {
          name: this.currencyForm.get('name')?.value,
          code: this.currencyForm.get('code')?.value,
          decimals: this.currencyForm.get('decimals')?.value,
        };

        console.log(bankEdit);

        this.currencyService
          .editCurrency(bankEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Moneda Editado Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.currencyForm.markAllAsTouched();
    }
  }
}
