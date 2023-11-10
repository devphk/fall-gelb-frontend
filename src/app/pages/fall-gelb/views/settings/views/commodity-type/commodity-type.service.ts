import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { Commodities } from '@shared/models/commodities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommodityTypeService {

  constructor(private http:HttpService) { }

  getCommodities(): Observable<Commodities[]> {
    return this.http.get('/commodities');
  }

  createCommodity(data: any): Observable<Commodities[]> {
    return this.http.post('/commodities', data, undefined, true, LoadingMessage.CREATING_COMMODITY);
  }

  deleteCommodity(id:number) {
    return this.http.delete(`/commodities/${id}`, undefined, true, LoadingMessage.DELETING_COMMODITY);
  }

  editCommodity(data: any, id:number) {
    return this.http.put(`/commodities/${id}`, data)
  }
}
