import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { WithholdingConcept } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithholdingConceptsService {

  constructor(private http:HttpService) { }

  getConcepts(): Observable<WithholdingConcept[]> {
    return this.http.get('/withholding-concepts');
  }

  postConcepts(data:any): Observable<WithholdingConcept[]> {
    return this.http.post('/withholding-concepts', data)
  }

  deleteConcepts(id:number) {
    return this.http.delete('/withholding-concepts/' + id)
  }
  
  putConcept(data:any, id:number) {
    return this.http.put(`/withholdings-concepts/${id}`, data)
  }

}
