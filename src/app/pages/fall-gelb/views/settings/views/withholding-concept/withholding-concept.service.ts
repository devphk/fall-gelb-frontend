import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage, WithholdingConcept } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithholdingConceptsService {

  constructor(private http:HttpService) { }

  getConcepts(): Observable<WithholdingConcept[]> {
    return this.http.get('/withholding-concepts');
  }

  createConcept(data:any): Observable<WithholdingConcept[]> {
    return this.http.post('/withholding-concepts', data, undefined, true, LoadingMessage.CREATING_CONCEPT)
  }

  deleteConcept(id:number) {
    return this.http.delete('/withholding-concepts/' + id, undefined, true, LoadingMessage.DELETING_CONCEPT)
  }
  
  editConcept(data:any, id:number) {
    return this.http.put(`/withholdings-concepts/${id}`, data)
  }

}
