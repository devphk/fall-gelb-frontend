import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { ProviderService } from '../../providers/provider.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnitsService } from '../../../../settings/views/units/units.service';
import { CurrencyService } from '../../../../settings/views/currency/currency.service';
import { PaymentTermService } from '../../../../settings/views/payment-term/payment-term.service';
import { SelectOption } from '@shared/models';
import { ProviderServiceData } from '@shared/models/provider';
import { DatePipe } from '@angular/common';
import { DialogData } from '../../../../../../../core/models/dialog';

@Component({
  selector: 'app-form-provider-services',
  templateUrl: './form-provider-services.component.html',
  styleUrls: ['./form-provider-services.component.scss']
})
export class FormProviderServicesComponent implements OnInit {

  conceptTypes:SelectOption[] = [];
  unitsTypes:SelectOption[] = [];
  paymentTerms:SelectOption[] = [];
  currencyTypes:SelectOption[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormProviderServicesComponent>,
    private providerService: ProviderService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private unitsService:UnitsService,
    private currencyService: CurrencyService,
    private paymentTermsService:PaymentTermService,
    private datePipe:DatePipe
  ) {}
  providerServiceForm: FormGroup = new FormGroup({});


  ngOnInit(): void {
    this.getUnits();
    this.getCurrencies();
    this.getPaymentTerms();
    this.getConcepts(); 
    console.log('Data: ', this.data)
    this.initializeForm();
  }

  getUnits() {
    this.unitsService.getUnits().subscribe((units) => {
      units.map((units) => {
        this.unitsTypes.push({
          id: units.id,
          name: units.name,
        });
      });
    });
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((currencies) => {
      currencies.map((currency) => {
        this.currencyTypes.push({
          id: currency.id,
          name: currency.name,
        });
      });
    });
  }

  getPaymentTerms() {
    this.paymentTermsService.getPaymenTerms().subscribe((terms) => {
      terms.map((term) => {
        this.paymentTerms.push({
          id: term.id,
          name: term.name,
        });
      });
    });
  }

  getConcepts(){
    this.providerService.getConcepts().subscribe((concepts) => {
      concepts.map((concept) => {
        this.conceptTypes.push({
          id: concept.id,
          name: concept.name,
        });
      });
    });
    console.log('conceptTypes: ',this.conceptTypes)
  }

  initializeForm() {

    let selectedDate

    if(!this.data.title.includes('Crear')) {
      const timezoneOffset = new Date().getTimezoneOffset();
      const ajustedDate = new Date(this.data.dialogData[0].validity_date);
      
      ajustedDate.setMinutes(ajustedDate.getMinutes() + timezoneOffset);
      selectedDate = ajustedDate

      this.providerServiceForm = this.fb.group({
        concept: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].concept_id : '',
          [Validators.required]
        ),
        amount: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].amount : '',
          [Validators.required]
        ),
        unit: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].unit_id : '',
          [Validators.required]
        ),
        paymentTerms: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].payment_term_id
          : '',
          [Validators.required]
        ),
        currency: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].currency_id : '',
          [Validators.required]
        ),
        iva: this.fb.control(
          this.data.dialogData ? this.data.dialogData[0].iva : false,
        ),
        date: this.fb.control(
          this.data.dialogData ? selectedDate : '',
        ),
      });
    }else {
      
      this.providerServiceForm = this.fb.group({
        concept: this.fb.control('', [Validators.required]),
        amount: this.fb.control('', [Validators.required]),
        unit: this.fb.control('', [Validators.required]),
        paymentTerms: this.fb.control('', [Validators.required]),
        currency: this.fb.control('', [Validators.required]),
        iva: this.fb.control(false,),
        date: this.fb.control('',
        ),
      });
    }
    
    
  }

  saveNewProvider() {

    if (this.providerServiceForm.valid) {
      const providerServiceData: ProviderServiceData = {
        concept_id: this.providerServiceForm.get('concept')?.value,
        amount: this.providerServiceForm.get('amount')?.value,
        unit_id: this.providerServiceForm.get('unit')?.value,
        payment_term_id: this.providerServiceForm.get('paymentTerms')?.value,
        currency_id: this.providerServiceForm.get('currency')?.value,
        iva: this.providerServiceForm.get('iva')?.value,
        validity_date: this.providerServiceForm.get('date')?.value
      };

      if (this.data.title === 'Crear Servicio de Proveedor') {
        this.providerService.createProviderService(providerServiceData, this.data.dialogData.id).subscribe(
          (data) => {
            this.toastService.showToaster('Servicio de Proveedor Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {

      

      let selectedDate;
      
      const timezoneOffset = new Date().getTimezoneOffset();
      const ajustedDate = new Date(this.providerServiceForm.get('date')?.value);

      ajustedDate.setMinutes(ajustedDate.getMinutes() + timezoneOffset);
      selectedDate = ajustedDate

      const convertedDate = new Date(selectedDate).toISOString().slice(0, 10);

      const editProviderServiceData: ProviderServiceData = {
        concept_id: this.providerServiceForm.get('concept')?.value,
        amount: this.providerServiceForm.get('amount')?.value,
        unit_id: this.providerServiceForm.get('unit')?.value,
        payment_term_id: this.providerServiceForm.get('paymentTerms')?.value,
        currency_id: this.providerServiceForm.get('currency')?.value,
        iva: this.providerServiceForm.get('iva')?.value,
        validity_date: convertedDate
      };

      console.log('editProviderServiceData: ', editProviderServiceData)

        this.providerService
          .editProviderService(editProviderServiceData, this.data.dialogData[1], this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Proveedor Editada Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );          
      }

    } else {
      this.providerServiceForm.markAllAsTouched();
    }
  }
}
