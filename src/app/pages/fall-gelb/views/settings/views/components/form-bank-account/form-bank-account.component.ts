import { ToastService } from './../../../../../../../core/services/toast.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankService } from '../../bank/bank.service';
import { SelectOption } from '@shared/models';
import { BankAcountService } from '../../bank-account/bank-account.service';

@Component({
  selector: 'app-form-bank-account',
  templateUrl: './form-bank-account.component.html',
  styleUrls: ['./form-bank-account.component.scss'],
})
export class FormBankAccountComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormBankAccountComponent>,
    private bankService: BankService,
    private bankAccountService: BankAcountService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  bankAccountForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  bankOptions: SelectOption[] = [];
  currencyOptions: SelectOption[] = [];

  ngOnInit(): void {
    this.initializeForm();
    this.bankService.getBanks().subscribe((banks) => {
      banks.map((bank) => {
        this.bankOptions.push({
          id: bank.id,
          name: bank.name,
        });
      });
    });
  }

  initializeForm() {
    this.bankAccountForm = this.formBuild.group({
      account_number: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].account_number : '',
        [Validators.required]
      ),
      bank_id: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].bank_id : '',
        [Validators.required]
      ),
      currency_id: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].currency_id : '',
        [Validators.required]
      ),
    });
  }

  saveBankAccount() {
    if (this.bankAccountForm.valid) {
      if (this.data.title === 'Crear Cuenta Bancaria') {
        const bank = {
          account_number: this.bankAccountForm.get('account_number')?.value,
          bank_id: this.bankAccountForm.get('bank_id')?.value,
          currency_id: this.bankAccountForm.get('currency_id')?.value,
        };

        this.bankAccountService.createBankAcount(bank).subscribe(
          (data) => {
            this.toastService.showToaster(
              'Cuenta Bancaria Creada Correctamente!'
            );
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const bankEdit = {
          account_number: this.bankAccountForm.get('account_number')?.value,
          bank_id: this.bankAccountForm.get('bank_id')?.value,
          currency_id: this.bankAccountForm.get('currency_id')?.value,
        };

        console.log(bankEdit);

        this.bankAccountService
          .editBankAcount(bankEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster(
                'Cuenta Bancaria Editada Correctamente!'
              );
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.bankAccountForm.markAllAsTouched();
    }
  }
}
