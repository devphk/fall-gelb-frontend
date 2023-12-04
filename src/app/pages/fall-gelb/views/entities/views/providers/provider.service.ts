import { HttpUtilsService } from '@core/services';
import { TransportType } from './../../../../../../shared/models/customs';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage, SelectOption } from '@shared/models';
import { EditProviderDocumentPost, ProviderDocumentPost, ProviderPost, ProviderResponse, ProviderServiceData } from '@shared/models/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpService, private httpUtils: HttpUtilsService) {}

  getPersonTypes(): Observable<SelectOption[]> {
    return this.http.get('/person-types');
  }

  getProviderTypes(): Observable<SelectOption[]> {
    return this.http.get('/provider-types');
  }
  getProviderTransportTypes(): Observable<SelectOption[]> {
    return this.http.get('/provider-transport-types');
  }

  getProviders(TransportType?: string): Observable<ProviderResponse[]> {
    const params = {
      provider_transport_type: TransportType,
    };
    return this.http.get(
      '/providers',
      TransportType ? this.httpUtils.getHttpParams(params) : undefined
    );
  }

  createProvider(data: ProviderPost): Observable<ProviderResponse[]> {
    return this.http.post(
      '/providers',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_PROVIDER
    );
  }

  deleteProviders(id: number) {
    return this.http.delete(
      '/providers/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_PROVIDER
    );
  }

  getProvider(id: number) {
    return this.http.get('/providers/' + id);
  }

  editProvider(data: any, id: number) {
    return this.http.put(`/providers/${id}`, data);
  }

  getProviderServices(id:number) {
    return this.http.get(`/providers/${id}/services`);
  }

  createProviderService(data:ProviderServiceData, id: number) {
    return this.http.post(
      `/providers/${id}/services`, 
      data, 
      undefined,
      true, 
      LoadingMessage.CREATING_PROVIDER_SERVICE);
  }

  editProviderService(data:ProviderServiceData, idProvider:number, idService:number) {
    return this.http.put(`/providers/${idProvider}/services/${idService}`, data);
  }

  deleteProviderService(idProvider:number, idService:number) {
    return this.http.delete(`/providers/${idProvider}/services/${idService}`)
  }

  getConcept(id:number){
    return this.http.get(`/concepts/${id}`);
  }
  
  getConcepts():Observable<SelectOption[]>{
    return this.http.get('/concepts');
  }

  getProviderDocuments(id:number) {
    return this.http.get(`/providers/${id}/documents`);
  }

  createProviderDocument(data: ProviderDocumentPost) {
    return this.http.post(
      '/entity-document-items',
      data, 
      undefined, 
      true, 
      LoadingMessage.CREATING_PROVIDER_DOCUMENT);
  }

  editProviderDocument(data:EditProviderDocumentPost, id:number) {
    return this.http.put(`/entity-document-items/${id}`, data);
  }

  deleteProviderDocument(id:number) {
    return this.http.delete(`/entity-document-items/${id}`);
  }

  getDocumentTypes() {
    return this.http.get('/document-types');
  }

  getDocumentType(id:number) {
    return this.http.get(`/document-types/${id}`);
  }
}
