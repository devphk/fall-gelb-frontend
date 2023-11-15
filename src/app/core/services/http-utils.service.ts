import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor() { }

  getHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }

}
