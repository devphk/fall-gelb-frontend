import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { Warehouse } from '@shared/models/warehouse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:HttpService) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get('/warehouses');
  }

  createWarehouse(data: any): Observable<Warehouse[]> {
    return this.http.post('/warehouses', data, undefined, true, LoadingMessage.CREATING_CUSTOM);
  }

  deleteWarehouse(id:number) {
    return this.http.delete(`/warehouses/${id}`, undefined, true, LoadingMessage.DELETING_CUSTOM);
  }

  editWarehouse(data: any, id:number) {
    return this.http.put(`/warehouses/${id}`, data)
  }
}
