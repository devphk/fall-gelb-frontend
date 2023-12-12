import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContractTypeService } from '../../contract-type/contract-type.service';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-contract-type',
  templateUrl: './form-contract-type.component.html',
  styleUrls: ['./form-contract-type.component.scss'],
})
export class FormContractTypeComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormContractTypeComponent>,
    private bankService: ContractTypeService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  isEditMode: boolean = false;

  contractTypeFrom: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contractTypeFrom = this.formBuild.group({
      name: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
      code: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].code : ''
      ),
    });
  }

  saveContractType() {
    if (this.contractTypeFrom.valid) {
      if (this.data.title === 'Crear Tipo de Contrato') {
        const bank = {
          name: this.contractTypeFrom.get('name')?.value,
          code: this.contractTypeFrom.get('code')?.value,
        };

        this.bankService.createContractType(bank).subscribe(
          (data) => {
            this.toastService.showToaster(
              'Tipo de Contrato Creado Correctamente!'
            );
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const bankEdit = {
          name: this.contractTypeFrom.get('name')?.value,
          code: this.contractTypeFrom.get('code')?.value,
        };

        this.bankService
          .editContractType(bankEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster(
                'Tipo de Contrato Editado Correctamente!'
              );
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.contractTypeFrom.markAllAsTouched();
    }
  }
}
