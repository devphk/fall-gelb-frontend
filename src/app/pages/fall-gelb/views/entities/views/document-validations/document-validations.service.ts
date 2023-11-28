import { Injectable } from '@angular/core';
import { HttpService, HttpUtilsService } from '@core/services';
import { LoadingMessage } from '@shared/models';
import {
  EntityDocumentValidateFilter,
  EntityDocumentValidateResponse,
} from '@shared/models/entity-document-validate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentValidationsService {
  constructor(private http: HttpService, private httpUtils: HttpUtilsService) {}

  getDocumentValidate(
    filterparams?: EntityDocumentValidateFilter
  ): Observable<EntityDocumentValidateResponse[]> {
    const params = {
      entity_document_item_id: filterparams?.entity_document_item_id,
      entity_type: filterparams?.entity_type,
      status: filterparams?.status,
    };
    return this.http.get(
      '/entity-document-validations',
      filterparams ? this.httpUtils.getHttpParams(params) : undefined
    );
  }

  editDocumentValidate(data: any, id: number) {
    return this.http.put(`/entity-document-validations/${id}`, data);
  }
}
