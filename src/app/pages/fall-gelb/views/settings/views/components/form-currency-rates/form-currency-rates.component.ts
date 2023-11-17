import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { CurrencyRatesService } from '../../currency-rates/currency-rates.service';
import { CurrencyService } from '../../currency/currency.service';
import { CurrencyResponse } from '@shared/models/currency';
import { sameValueValidator } from './sameValueValidator.validator';
import { DatePipe } from '@angular/common';
import { UtilsService } from '@core/services/utils-service.service';


@Component({
  selector: 'app-form-currency-rates',
  templateUrl: './form-currency-rates.component.html',
  styleUrls: ['./form-currency-rates.component.scss']
})
export class FormCurrencyRatesComponent implements OnInit {

  title: string = '';
  isEdit:boolean = false;

  currencyA:CurrencyResponse[] = []
  currencyB:CurrencyResponse[] = []
  operations = [{value:'*', name: 'Multiplicar'}, {value:'/', name: 'Dividir'}]

  currencyRatesForm: FormGroup = this.fb.group({
    currencyA: this.fb.control(this.data.dialogData ? this.data.dialogData[0].currencyA : '', [Validators.required]),
    currencyB: this.fb.control(this.data.dialogData ? this.data.dialogData[0].currencyB : '', [Validators.required]),
    amount: this.fb.control('', [Validators.required]),
    operation: this.fb.control(this.data.dialogData ? this.data.dialogData[0].operation : '', [Validators.required]),
  }, {
    validator: sameValueValidator('currencyA', 'currencyB', this.isEdit)
  })
  
  constructor( private fb:FormBuilder,
               private currencyRateService:CurrencyRatesService,
               private currenciesService:CurrencyService,
               private dialogRef:MatDialogRef<FormCurrencyRatesComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService,
               private datePipe:DatePipe,
               private utilsService:UtilsService) {}

  
  ngOnInit(): void {
    this.title = this.data.title;
    this.getCurrencies();
    console.log(this.data)

    if (this.title.includes('Editar')) {
      this.isEdit = true;
      this.currencyRatesForm.get('currencyA')?.removeValidators(Validators.required)
      this.currencyRatesForm.get('currencyB')?.removeValidators(Validators.required)
      this.currencyRatesForm.get('operation')?.removeValidators(Validators.required)
    }
    
  }

  getCurrencies() {
    this.currenciesService
      .getCurrencies()
        .subscribe((resp) => {
          this.currencyA = resp;
          this.currencyB = resp;
    });
  }
  
  saveCurrencyRate() {
    if (this.currencyRatesForm.valid) {
    if(this.data.title === 'Crear Tasa Monetaria'){
      
      const actualDate = new Date();

      const formattedDate = this.datePipe.transform( actualDate, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSSSSZ')

      const currencyAmount = parseInt(this.currencyRatesForm.get('amount')?.value.toString().replace
      ('.', ''))

        const currency = {
          currency_a_id: this.currencyRatesForm.get('currencyA')?.value, 
          currency_b_id: this.currencyRatesForm.get('currencyB')?.value,  
          amount: currencyAmount, 
          operation: this.currencyRatesForm.get('operation')?.value,  
          // datetime: formattedDate,
        }
          console.log('Currency: ', currency)
        this.currencyRateService.createCurrencyRate(currency)
          .subscribe((data) => {
            this.toastService.showToaster("Tasa Monetaria Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const actualDate = new Date();

        const formattedDate = this.datePipe.transform( actualDate, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSSSSZ')

        const editCurrencyRate = {
          amount: this.currencyRatesForm.get('amount')?.value,
          // datetime: formattedDate,
        }
        console.log('editCurrencyRate: ', editCurrencyRate)
        this.currencyRateService.editCurrencyRate(editCurrencyRate, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Tasa Monetaria Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.currencyRatesForm.markAllAsTouched();
      console.log('INVALID')

    }
  }

}
