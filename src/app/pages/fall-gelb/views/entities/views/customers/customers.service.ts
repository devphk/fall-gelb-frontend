import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { Customers } from '@shared/models/customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpService) { }

  getCustomers(): Observable<Customers[]> {
    return this.http.get('/customers');
  }

  createCustomer(data: any): Observable<Customers[]> {
    return this.http.post('/customers', data, undefined, true, LoadingMessage.CREATING_CUSTOMER);
  }

  deleteCustomer(id:number) {
    return this.http.delete(`/customers/${id}`, undefined, true, LoadingMessage.DELETING_CUSTOMER);
  }

  editCustomer(data: any, id:number) {
    return this.http.put(`/customers/${id}`, data)
  }

  getBillers() {
    return this.http.get('/billers');
  }
}
