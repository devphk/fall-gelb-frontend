import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { ContainerType } from '@shared/models/container-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerTypeService {

  constructor(private http:HttpService) { }

  getContainerTypes(): Observable<ContainerType[]> {
    return this.http.get('/container-types');
  }

  createContainerType(data: any): Observable<ContainerType[]> {
    return this.http.post('/container-types', data, undefined, true, LoadingMessage.CREATING_CONTAINER_TYPE);
  }

  deleteContainerType(id:number) {
    return this.http.delete(`/container-types/${id}`, undefined, true, LoadingMessage.DELETING_CONTAINER_TYPE);
  }

  editContainerType(data: any, id:number) {
    return this.http.put(`/container-types/${id}`, data)
  }

}
