import { BankAcountResponse } from '@shared/models/bank-account';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankAcountService {
  constructor(private http: HttpService) {}

  getBankAcounts(): Observable<BankAcountResponse[]> {
    return this.http.get('/bank-accounts');
  }

  createBankAcount(data: any): Observable<BankAcountResponse[]> {
    return this.http.post(
      '/bank-accounts',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_BANK_ACCOUNT
    );
  }

  deleteBankAcounts(id: number) {
    return this.http.delete(
      '/bank-accounts/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_BANK_ACCOUNT
    );
  }

  getBankAcount(id: number) {
    return this.http.get('/bank-accounts/' + id);
  }

  editBankAcount(data: any, id: number) {
    return this.http.put(`/bank-accounts/${id}`, data);
  }
}
