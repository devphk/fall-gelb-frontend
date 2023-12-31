import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Customs, LoadingMessage } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  constructor(private http:HttpService) { }

  getCustoms(): Observable<Customs[]> {
    return this.http.get('/customs');
  }

  createCustom(data: any): Observable<Customs[]> {
    return this.http.post('/customs', data, undefined, true, LoadingMessage.CREATING_CUSTOM);
  }

  deleteCustom(id:number) {
    return this.http.delete(`/customs/${id}`, undefined, true, LoadingMessage.DELETING_CUSTOM);
  }

  editCustom(data: any, id:number) {
    return this.http.put(`/customs/${id}`, data)
  }
}
