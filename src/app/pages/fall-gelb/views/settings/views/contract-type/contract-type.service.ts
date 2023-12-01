import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import { ContractType } from '@shared/models/contract-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractTypeService {
  constructor(private http: HttpService) {}

  getContractTypes(): Observable<ContractType[]> {
    return this.http.get('/contract-types');
  }

  createContractType(data: any): Observable<ContractType[]> {
    return this.http.post(
      '/contract-types',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_CONTRAT_TYPE
    );
  }

  deleteContractTypes(id: number) {
    return this.http.delete(
      '/contract-types/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_CONTRAT_TYPE
    );
  }

  getContractType(id: number) {
    return this.http.get('/contract-types/' + id);
  }

  editContractType(data: any, id: number) {
    return this.http.put(`/contract-types/${id}`, data);
  }
}
