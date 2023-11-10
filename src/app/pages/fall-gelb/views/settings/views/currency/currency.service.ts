import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { CurrencyPost, CurrencyResponse } from '@shared/models/currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencieService {
  constructor(private http: HttpService) {}

  getCurrencies(): Observable<CurrencyResponse[]> {
    return this.http.get('/currencies');
  }

  createCurrency(data: CurrencyPost): Observable<CurrencyResponse[]> {
    return this.http.post(
      '/currencies',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_BANK
    );
  }

  deleteCurrency(id: number) {
    return this.http.delete(
      '/currencies/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_BANK
    );
  }

  getCurrency(id: number) {
    return this.http.get('/currencies/' + id);
  }

  editCurrency(data: any, id: number) {
    return this.http.put(`/currencies/${id}`, data);
  }
}
