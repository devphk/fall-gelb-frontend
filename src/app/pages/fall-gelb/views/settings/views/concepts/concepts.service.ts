import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { CargoType, 
         ConceptType, 
         Customtype, 
         TransportType, 
         RetentionConcept, 
         Concept} from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpService) { }

  getConcepts(): Observable<Concept[]> {
    return this.http.get('/concepts');
  }

  getCargoTypes(): Observable<CargoType[]> {
    return this.http.get('/cargo-types');
  }

  getCustomsTypes(): Observable<Customtype[]> {
    return this.http.get('/customs-types');
  }

  getCustoms(): Observable<Customtype[]> {
    return this.http.get('/customs');
  }

  getTransportTypes(): Observable<TransportType[]> {
    return this.http.get('/transport-types');
  }

  getRetentionConcepts(): Observable<RetentionConcept[]> {
    return this.http.get('/retention-concepts');
  }

  getConceptTypes(): Observable<ConceptType[]> {
    return this.http.get('/concept-types');
  }

  createCustomConcept(retentionConceptId: number,
                      conceptTypeId: number,
                      customId: number,
                      customTypeId: number,
                      forSale: boolean,
                      forPurchase: boolean) {

    const body = {
      retention_concept_id: retentionConceptId,
      concept_type_id: conceptTypeId,
      customs_id: customId,
      customs_type_id: customTypeId,
      for_sale: forSale,
      for_purchase: forPurchase
    }

    console.log("Body ", body);

    return this.http.post('/concepts',
                          body);

  }

  createGroundFreightConcept(retentionConceptId: number,
                             conceptTypeId: number,
                             origin: string,
                             destination: string,
                             forSale: boolean,
                             forPurchase: boolean) {

    const body = {
      withholding_concept_id: retentionConceptId,
      concept_type_id: conceptTypeId,
      origin,
      destination,
      for_sale: forSale,
      for_purchase: forPurchase
    }

    return this.http.post('/concepts',
                          body);

  }

  createInternationalFreightConcept(retentionConceptId: number,
                                    conceptTypeId: number,
                                    origin: string,
                                    destination: string,
                                    transportTypeId: number,
                                    forSale: boolean,
                                    forPurchase: boolean) {

    const body = {
      withholding_concept_id: retentionConceptId,
      concept_type_id: conceptTypeId,
      origin,
      destination,
      transport_type_id: transportTypeId,
      for_sale: forSale,
      for_purchase: forPurchase
    }

    return this.http.post('/concepts',
                          body);

  }

  createStorageConcept(conceptTypeId: number,
                       customTypeId: number,
                       cargoTypeId: number,
                       region: string,
                       forSale: boolean,
                       forPurchase: boolean) {

    const body = {
      concept_type_id: conceptTypeId,
      customs_type_id: customTypeId,
      cargo_type_id: cargoTypeId,
      region,
      for_sale: forSale,
      for_purchase: forPurchase
    }

    return this.http.post('/concepts',
                          body);

  }

  createConceptOther(name: string,
                     retentionConceptId: number,
                     conceptTypeId: number,
                     forSale: boolean,
                     forPurchase: boolean) {

    const body = {
      name,
      withholding_concept_id: retentionConceptId,
      concept_type_id: conceptTypeId,
      for_sale: forSale,
      for_purchase: forPurchase
    }

    return this.http.post('/concepts',
                          body);

  }


}
