import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Customs } from '@shared/models'

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  constructor( private http:HttpService ) { }

  getCustoms(): Observable<Customs[]> {
    return this.http.get('/customs');
  }

  postCustoms(data:Customs): Observable<Customs[]> {
    return this.http.post('/customs', data);
  }
}
