import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Customs } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  constructor(private http:HttpService) { }

  getCustoms(): Observable<Customs[]> {
    return this.http.get('/customs');
  }

  postCustoms(data: any): Observable<Customs[]> {
    return this.http.post('/customs', data);
  }

  deleteCustoms(id:number) {
    return this.http.delete(`/customs/${id}`);
  }

  putCustom(data: any, id:number) {
    return this.http.put(`/customs/${id}`, data)
  }
}
