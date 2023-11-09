import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { BankService } from '../../bank/bank.service';
import { ToastService } from '@core/services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-bank',
  templateUrl: './form-bank.component.html',
  styleUrls: ['./form-bank.component.scss'],
})
export class FormBankComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormBankComponent>,
    private bankService: BankService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  isEditMode: boolean = false;

  banckFrom: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.banckFrom = this.formBuild.group({
      name: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
    });
  }

  saveUser() {
    if (this.banckFrom.valid) {
      if (this.data.title === 'Crear Banco') {
        const bank = {
          name: this.banckFrom.get('name')?.value,
        };

        this.bankService.createBank(bank).subscribe(
          (data) => {
            this.toastService.showToaster('Banco Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const bankEdit = {
          name: this.banckFrom.get('name')?.value,
        };

        console.log(bankEdit);

        this.bankService
          .editBank(bankEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Banco Editado Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.banckFrom.markAllAsTouched();
    }
  }
}
