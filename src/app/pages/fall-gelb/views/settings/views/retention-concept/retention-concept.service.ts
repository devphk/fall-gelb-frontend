import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage, RetentionConcept } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetentionConceptsService {

  constructor(private http:HttpService) { }

  getConcepts(): Observable<RetentionConcept[]> {
    return this.http.get('/retention-concepts');
  }

  createConcept(data:any): Observable<RetentionConcept[]> {
    return this.http.post('/retention-concepts', data, undefined, true, LoadingMessage.CREATING_CONCEPT)
  }

  deleteConcept(id:number) {
    return this.http.delete('/retention-concepts/' + id, undefined, true, LoadingMessage.DELETING_CONCEPT)
  }
  
  editConcept(data:any, id:number) {
    return this.http.put(`/retention-concepts/${id}`, data)
  }

}
