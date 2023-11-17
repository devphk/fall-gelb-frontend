import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { CargoType, ConceptType, 
         Customs, 
         Customtype, 
         TransportType, 
         WithholdingConcept } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpService) { }

  getConcepts() {
    return this.http.get('/concepts');
  }

  createConcept() {
    
  }

  getCargoTypes(): Observable<CargoType[]> {
    return this.http.get('/cargo-types');
  }

  getCustomsTypes(): Observable<Customtype[]> {
    return this.http.get('/customs-types');
  }

  getTransportTypes(): Observable<TransportType[]> {
    return this.http.get('/transport-types');
  }

  getWithholdingConcepts(): Observable<WithholdingConcept[]> {
    return this.http.get('/withholding-concepts');
  }

  getConceptTypes(): Observable<ConceptType[]> {
    return this.http.get('/concept-types');
  }

}
