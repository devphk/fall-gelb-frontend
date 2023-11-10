import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { BankResponse } from '@shared/models/bank';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpService) {}

  getBanks(): Observable<BankResponse[]> {
    return this.http.get('/banks');
  }

  createBank(data: any): Observable<BankResponse[]> {
    return this.http.post(
      '/banks',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_BANK
    );
  }

  deleteBanks(id: number) {
    return this.http.delete(
      '/banks/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_BANK
    );
  }

  getBank(id: number) {
    return this.http.get('/banks/' + id);
  }

  editBank(data: any, id: number) {
    return this.http.put(`/banks/${id}`, data);
  }
}
