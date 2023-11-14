import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { truckType } from '@shared/models/truck-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TruckTypeService {

  constructor(private http:HttpService) { }

  getTruckType(): Observable<truckType[]> {
    return this.http.get('/truck-types');
  }

  createTruckType(data: any): Observable<truckType[]> {
    return this.http.post('/truck-types', data, undefined, true, LoadingMessage.CREATING_TRUCK_TYPE);
  }

  deleteTruckType(id:number) {
    return this.http.delete(`/truck-types/${id}`, undefined, true, LoadingMessage.DELETING_TRUCK_TYPE);
  }

  editTruckType(data: any, id:number) {
    return this.http.put(`/truck-types/${id}`, data)
  }
}
