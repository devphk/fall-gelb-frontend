import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { DocumentValidationsService } from '../../document-validations/document-validations.service';

@Component({
  selector: 'app-form-document-validations',
  templateUrl: './form-document-validations.component.html',
  styleUrls: ['./form-document-validations.component.scss'],
})
export class FormDocumentValidationsComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<FormDocumentValidationsComponent>,
    private DocumentValidationService: DocumentValidationsService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  statuOptions: any = [
    {
      value: 'pending',
      name: 'Pendiente',
    },
    {
      value: 'accepted',
      name: 'Aceptado',
    },
    {
      value: 'rejected',
      name: 'Rechazado',
    },
  ];

  documentValidationFrom: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.documentValidationFrom = this.formBuild.group({
      status: this.formBuild.control(this.data.dialogData[0].status, [
        Validators.required,
      ]),
      observations: this.formBuild.control(''),
    });
  }

  saveDocumentValidations() {
    if (this.documentValidationFrom.valid) {
      const DocumentValidation = {
        status: this.documentValidationFrom.get('status')?.value,
        observations: this.documentValidationFrom.get('observations')?.value,
      };

      this.DocumentValidationService.editStatusDocumentValidate(
        DocumentValidation,
        this.data.dialogData[0].id
      ).subscribe(
        (data) => {
          this.toastService.showToaster('Cambio de Estado Actualizado!');
          this.dialogRef.close(true);
        },
        (error) => this.toastService.showToaster(error.error.message, true)
      );
    } else {
      this.documentValidationFrom.markAllAsTouched();
    }
  }
}
