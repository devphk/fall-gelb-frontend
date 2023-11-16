import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { CurrencyRatesService } from './currency-rates.service';
import { CurrencyDataTable } from '@shared/models/currency';
import { CurrencyRatesDataTable } from '@shared/models/currency-rates';
import { FormCurrencyComponent } from '../components/form-currency/form-currency.component';
import { FormCurrencyRatesComponent } from '../components/form-currency-rates/form-currency-rates.component';

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.scss']
})
export class CurrencyRatesComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "Moneda A",
    "Moneda B",
    "Tasa",
    "Operación",
    "Fecha de Actualización",
  ];
  tableColumnsTags: string[] = [
    "currencyNameA",
    "currencyNameB",
    "amount",
    "operation",
    "datetime",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private currencyRateService:CurrencyRatesService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCurrencyRates();
  }

  getCurrencyRates() {
    this.currencyRateService.getCurrencyRates()
      .subscribe((response) => {
        const tableData: CurrencyRatesDataTable[] = [];
        
        response.forEach((currency) => {
          let operator = currency.operation;
          let result = operator === '*' ? 'Multiplicar' : 'Dividir';

          const currencytoInput:CurrencyRatesDataTable = {
            id: currency.id,
            currencyIdA: currency.currency_a_id,
            currencyIdB: currency.currency_b_id,
            amount: currency.amount,
            operation: result,
            datetime: currency.datetime,
            active: currency.active,
            currencyNameA: currency.currency_a.name,
            currencyNameB: currency.currency_b.name,
            
          };

          console.log(currencytoInput)

          tableData.push(currencytoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processCurrencyRate(processType: string) {
    this.dialogService
        .openDialog(FormCurrencyRatesComponent, 
                    processType === 'Add' ? 'Crear Tasa Monetaria' : 'Editar Tasa Monetaria', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshCurrencyRates();
          }
        });
  }

  deleteCurrencyRate() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar tasa monetaria',
            `¿Eliminar tasa monetaria '${this.itemsSelected[0].currencyNameA}' a '${this.itemsSelected[0].currencyNameB}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.currencyRateService.deleteCurrencyRate(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Aduana eliminada correctamente!')
          this.refreshCurrencyRates();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshCurrencyRates() {
    this.tableData = [];

    this.currencyRateService.getCurrencyRates()
        .subscribe((response) => {
          response.forEach((currency) => {
            let operator = currency.operation;
            let result = operator === '*' ? 'Multiplicar' : 'Dividir';
  
            const currencytoInput:CurrencyRatesDataTable = {
              id: currency.id,
              currencyIdA: currency.currency_a_id,
              currencyIdB: currency.currency_b_id,
              amount: currency.amount,
              operation: result,
              datetime: currency.datetime,
              active: currency.active,
              currencyNameA: currency.currency_a.name,
              currencyNameB: currency.currency_b.name,
              
            };
    
            this.tableData.push(currencytoInput);
          });
        })
  }

}
