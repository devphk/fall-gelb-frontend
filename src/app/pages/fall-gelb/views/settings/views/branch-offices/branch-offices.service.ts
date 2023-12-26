import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { BranchOffices } from '@shared/models/branch-offices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficesService {


  constructor(private http:HttpService) { }

  getBranchOffices(): Observable<BranchOffices[]> {
    return this.http.get('/branch-offices');
  }

  createBranchOffices(data: any): Observable<BranchOffices[]>{
    return this.http.post('/branch-offices', data, undefined, true, LoadingMessage.CREATING_BRANCH_OFFICE);
  }

  deleteBranchOffice(id:number) {
    return this.http.delete(`/branch-offices/${id}`, undefined, true, LoadingMessage.DELETING_BRANCH_OFFICE);
  }

  editBranchOffice(data:any, id:number) {
    return this.http.put(`/branch-offices/${id}`, data)
  }

  // getWarehouses(): Observable<Warehouse[]> {
  //   return this.http.get('/warehouses');
  // }

  // createWarehouse(data: any): Observable<Warehouse[]> {
  //   return this.http.post('/warehouses', data, undefined, true, LoadingMessage.CREATING_WAREHOUSE);
  // }

  // deleteWarehouse(id:number) {
  //   return this.http.delete(`/warehouses/${id}`, undefined, true, LoadingMessage.DELETING_WAREHOUSE);
  // }

  // editWarehouse(data: any, id:number) {
  //   return this.http.put(`/warehouses/${id}`, data)
  // }
}
