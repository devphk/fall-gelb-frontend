import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { CurrencyRatesService } from './currency-rates.service';
import { CurrencyRatesDataTable } from '@shared/models/currency-rates';
import { FormCurrencyRatesComponent } from '../components/form-currency-rates/form-currency-rates.component';
import { UtilsService } from '@core/services/utils-service.service';
import { NgxMaskService } from 'ngx-mask';

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

  editAmount: string = ''


  constructor(private dialogService: DialogService,
              private currencyRateService:CurrencyRatesService,
              private toastService: ToastService,
              private utilsService:UtilsService,
              private maskService:NgxMaskService) { }

  ngOnInit(): void {
    this.getCurrencyRates();
  }

  getCurrencyRates() {
    this.tableData = [];

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
            amount: {
              value: currency.amount,
              mask: this.utilsService.generateCurrencyMask(currency.currency_b.name, currency.amount)
            },
            operation: result,
            datetime: currency.datetime,
            active: currency.active,
            currencyNameA: currency.currency_a.name,
            currencyNameB: currency.currency_b.name,
            
          };
          tableData.push(currencytoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processCurrencyRate(processType: string) {

    this.editAmount = this.maskService.applyMask(this.itemsSelected[0]?.amount.value.toString(), this.itemsSelected[0]?.amount.mask)
    
    this.dialogService
        .openDialog(FormCurrencyRatesComponent, 
                    processType === 'Add' ? 'Crear Tasa Monetaria' : `Editar Tasa Monetaria '${this.itemsSelected[0].currencyNameA}' a '${this.itemsSelected[0].currencyNameB}' '${this.editAmount}' `, 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.getCurrencyRates();
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
          this.toastService.showToaster('Tasa Monetaria eliminada correctamente!')
          this.getCurrencyRates();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }
}
