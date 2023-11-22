import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { DepartmentResponse, LoadingMessage } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpService) {}

  getDepartments(): Observable<DepartmentResponse[]> {
    return this.http.get('/departaments');
  }

  createDepartment(data: any): Observable<DepartmentResponse[]> {
    return this.http.post(
      '/departaments',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_DEPARMENT
    );
  }

  deleteDepartments(id: number) {
    return this.http.delete(
      '/departaments/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_DEPARMENT
    );
  }

  getDepartment(id: number) {
    return this.http.get('/departaments/' + id);
  }

  editDepartment(data: any, id: number) {
    return this.http.put(`/departaments/${id}`, data);
  }
}
