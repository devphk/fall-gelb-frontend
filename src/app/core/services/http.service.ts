import {Injectable} from '@angular/core';
import {HttpClient, 
        HttpHeaders, 
        HttpParams} from '@angular/common/http';
import {Observable, 
        Subject} from 'rxjs';
import {finalize, 
        takeUntil} from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cancelHttpCall: Subject<void> = new Subject<void>();
  urlBase = environment.urlBase;

  constructor(private http: HttpClient) {
  }

  get(uri: string,
      params?: HttpParams,
      startLoading = true,
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'})): Observable<any> {
    return this.http.get<any>(this.urlBase + uri, {headers, params});
  }

  post(uri: string,
       body: any = {},
       params?: HttpParams,
       startLoading = true,
       headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {
    return this.http.post<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
  }

  postLogin(uri: string,
            body: any = {},
            params?: HttpParams,
            startLoading = true,
            headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {
    return this.http.post<any>(
      uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
  }

  put(uri: string,
      body: any = {},
      params?: HttpParams,
      startLoading = true,
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {

    return this.http.put<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
  }

  patch(uri: string,
        body: any = {},
        params?: HttpParams,
        startLoading = true,
        headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {
    return this.http.patch<any>(
      this.urlBase + uri,
      headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
      {headers, params})
  }

  delete(uri: string,
         params?: HttpParams,
         startLoading = true,
         headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'})): Observable<any> {

    return this.http.delete<any>(this.urlBase + uri, {headers, params})
  }

  unsubscribeHttpCall() {
    this.cancelHttpCall.next();
  }
}
