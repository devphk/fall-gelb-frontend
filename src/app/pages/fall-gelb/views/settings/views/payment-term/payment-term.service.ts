import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { PaymenTermResponse } from '@shared/models/payment-term';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentTermService {
  constructor(private http: HttpService) {}

  getPaymenTerms(): Observable<PaymenTermResponse[]> {
    return this.http.get('/payment-terms');
  }

  createPaymenTerm(data: any): Observable<PaymenTermResponse[]> {
    return this.http.post(
      '/payment-terms',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_BANK
    );
  }

  deletePaymenTerms(id: number) {
    return this.http.delete(
      '/payment-terms/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_BANK
    );
  }

  getPaymenTerm(id: number) {
    return this.http.get('/payment-terms/' + id);
  }

  editPaymenTerm(data: any, id: number) {
    return this.http.put(`/payment-terms/${id}`, data);
  }
}
