import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { CargoTypeLCL } from '@shared/models/cargo-type-lcl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoTypeLclService {

  constructor(private http:HttpService) { }

  getCargoLCL(): Observable<CargoTypeLCL[]> {
    return this.http.get('/lcl-cargo-types');
  }

  createCargoLCL(data: any): Observable<CargoTypeLCL[]> {
    return this.http.post('/lcl-cargo-types', data, undefined, true, LoadingMessage.CREATING_LCL_CARGO);
  }

  deleteCargoLCL(id:number) {
    return this.http.delete(`/lcl-cargo-types/${id}`, undefined, true, LoadingMessage.DELETING_LCL_CARGO);
  }

  editCargoLCL(data: any, id:number) {
    return this.http.put(`/lcl-cargo-types/${id}`, data)
  }
}
