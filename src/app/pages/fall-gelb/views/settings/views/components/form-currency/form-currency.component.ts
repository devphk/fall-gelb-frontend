import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrencieService } from '../../currency/currency.service';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
})
export class FormCurrencyComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormCurrencyComponent>,
    private currencyService: CurrencieService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  isEditMode: boolean = false;

  currencyFrom: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.currencyFrom = this.formBuild.group({
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
    if (this.currencyFrom.valid) {
      if (this.data.title === 'Crear Moneda') {
        const bank = {
          name: this.currencyFrom.get('name')?.value,
          code: this.currencyFrom.get('code')?.value,
          decimals: this.currencyFrom.get('decimals')?.value,
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
          name: this.currencyFrom.get('name')?.value,
          code: this.currencyFrom.get('code')?.value,
          decimals: this.currencyFrom.get('decimals')?.value,
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
      this.currencyFrom.markAllAsTouched();
    }
  }
}
