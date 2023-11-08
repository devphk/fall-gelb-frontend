import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { Units } from '@shared/models/units';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http:HttpService) { }

  getUnits(): Observable<Units[]> {
    return this.http.get('/units');
  }

  createUnit(data: any): Observable<Units[]> {
    return this.http.post('/units', data, undefined, true, LoadingMessage.CREATING_UNIT);
  }

  deleteUnit(id:number) {
    return this.http.delete(`/units/${id}`, undefined, true, LoadingMessage.DELETING_UNIT);
  }

  editUnit(data: any, id:number) {
    return this.http.put(`/units/${id}`, data)
  }
}
