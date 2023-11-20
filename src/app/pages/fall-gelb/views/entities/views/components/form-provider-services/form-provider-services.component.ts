import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { ProviderService } from '../../providers/provider.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-provider-services',
  templateUrl: './form-provider-services.component.html',
  styleUrls: ['./form-provider-services.component.scss']
})
export class FormProviderServicesComponent implements OnInit {

  conceptTypes = [{id:1, name:'Concepto1'},{id:2, name:'Concepto2'}];
  unitsTypes = [{id:1, name:'Unidad1'},{id:2, name:'Unidad2'}];
  paymentTerms = [{id:1, name:'Condicion1'},{id:2, name:'Condicion2'}];
  currencyTypes = [{id:1, name:'Moneda1'},{id:2, name:'Moneda2'}];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormProviderServicesComponent>,
    private providerService: ProviderService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  providerServiceForm: FormGroup = new FormGroup({});


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.providerServiceForm = this.fb.group({
      concept: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].concept : '',
        [Validators.required]
      ),
      amount: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].amount : '',
        [Validators.required]
      ),
      unit: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].unit : '',
        [Validators.required]
      ),
      paymentTerms: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].paymentTerms : '',
        [Validators.required]
      ),
      currency: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].currency : '',
        [Validators.required]
      ),
      validityDate: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].validityDate : '',
      ),
    });
  }

  saveNewProvider() {
    if (this.providerServiceForm.valid) {
      const providerData = {
        concept: this.providerServiceForm.get('concept')?.value,
        amount: this.providerServiceForm.get('amount')?.value,
        unit: this.providerServiceForm.get('unit')?.value,
        paymentTerms: this.providerServiceForm.get('paymentTerms')?.value,
        currency: this.providerServiceForm.get('currency')?.value,
      };

      // if (this.data.title === 'Crear Proveedor') {
      //   this.providerService.createProvider(providerData).subscribe(
      //     (data) => {
      //       this.toastService.showToaster('Proveedor Creada Correctamente!');
      //       this.dialogRef.close(true);
      //     },
      //     (error) => this.toastService.showToaster(error.error.message, true)
      //   );
      // } else {
      //   this.providerService
      //     .editProvider(providerData, this.data.dialogData[0].id)
      //     .subscribe(
      //       (data) => {
      //         this.toastService.showToaster('Proveedor Editada Correctamente!');
      //         this.dialogRef.close(true);
      //       },
      //       (error) => this.toastService.showToaster(error.error.message, true)
      //     );
      // }

      console.log(providerData);
    } else {
      this.providerServiceForm.markAllAsTouched();
    }
  }

}
