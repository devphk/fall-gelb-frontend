import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import {
  PaymenTermResponse,
  PaymenTermTable,
} from '@shared/models/payment-term';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentTermService {
  constructor(private http: HttpService) {}

  getPaymenTerms(): Observable<PaymenTermTable[]> {
    return this.http.get('/payment-terms');
  }

  createPaymenTerm(data: any): Observable<PaymenTermResponse[]> {
    return this.http.post(
      '/payment-terms',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_PAYMENT_TERM
    );
  }

  deletePaymenTerms(id: number) {
    return this.http.delete(
      '/payment-terms/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_PAYMENT_TERM
    );
  }

  getPaymenTerm(id: number): Observable<PaymenTermResponse> {
    return this.http.get('/payment-terms/' + id);
  }

  editPaymenTerm(data: any, id: number) {
    return this.http.put(`/payment-terms/${id}`, data);
  }
}
