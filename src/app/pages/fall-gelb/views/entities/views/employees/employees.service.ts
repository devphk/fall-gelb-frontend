import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { Employee, EmployeePost } from '@shared/models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpService) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get('/employees');
  }

  createEmployee(data: EmployeePost): Observable<EmployeePost[]> {
    return this.http.post('/employees', data, undefined, true, LoadingMessage.CREATING_EMPLOYEE);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`/employees/${id}`, undefined, true, LoadingMessage.DELETING_EMPLOYEE);
  }

  editEmployee(id:number, data:any) {
    return this.http.put(`/employees/${id}`, data);
  }

  getDepartments() {
    return this.http.get('/departaments');
  }

  getContractTypes() {
    return this.http.get('/contract-types');
  }

  getEmployeeStatuses() {
    return this.http.get('/employee-statuses');
  }

  getPaymentFrequencies() {
    return this.http.get('/payment-frequencies');
  }

  getBranchOffices(){
    return this.http.get('/branch-offices');
  }

  getProviderTypes() {
    return this.http.get('/provider-types');
  }

  getEmployeeTypes() {
    return this.http.get('/employee-types');
  }
}
