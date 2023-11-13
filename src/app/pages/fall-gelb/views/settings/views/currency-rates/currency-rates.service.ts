import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { CurrencyRates } from '@shared/models/currency-rates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRatesService {

  constructor(private http:HttpService) { }

  getCurrencyRates(): Observable<CurrencyRates[]> {
    return this.http.get('/currency-rates');
  }

  createCurrencyRate(data: any): Observable<CurrencyRates[]> {
    return this.http.post('/currency-rates', data, undefined, true, LoadingMessage.CREATING_CURRENCY_RATE);
  }

  deleteCurrencyRate(id:number) {
    return this.http.delete(`/currency-rates/${id}`, undefined, true, LoadingMessage.DELETING_CURRENCY_RATE);
  }

  editCurrencyRate(data: any, id:number) {
    return this.http.put(`/currency-rates/${id}`, data)
  }
}
