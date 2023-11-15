import { HttpUtilsService } from '@core/services';
import { TransportType } from './../../../../../../shared/models/customs';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage, SelectOption } from '@shared/models';
import { ProviderPost, ProviderResponse } from '@shared/models/provider';
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

  getProviders(TransportType?: number): Observable<ProviderResponse[]> {
    const params = {
      transport_type_id: TransportType,
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
}
