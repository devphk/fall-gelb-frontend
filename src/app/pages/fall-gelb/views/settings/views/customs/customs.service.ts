import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Custom, 
         LoadingMessage } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  constructor(private http:HttpService) { }

  getCustoms(): Observable<Custom[]> {
    return this.http.get('/customs');
  }

  createCustom(data: any): Observable<Custom[]> {
    return this.http.post('/customs', data, undefined, true, LoadingMessage.CREATING_CUSTOM);
  }

  deleteCustom(id:number) {
    return this.http.delete(`/customs/${id}`, undefined, true, LoadingMessage.DELETING_CUSTOM);
  }

  editCustom(data: any, id:number) {
    return this.http.put(`/customs/${id}`, data)
  }

  getTransportTypes() {
    return this.http.get('/transport-types');
  }
}
