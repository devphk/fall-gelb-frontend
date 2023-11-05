import {Injectable} from '@angular/core';
import {HttpClient, 
        HttpHeaders, 
        HttpParams} from '@angular/common/http';
import {Observable, 
        Subject} from 'rxjs';
import {finalize, 
        takeUntil} from 'rxjs/operators';
import { environment } from '@environments/environment';
import { LoadingMessage } from '@shared/models';
import { SpinnerService } from './spinner-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cancelHttpCall: Subject<void> = new Subject<void>();
  urlBase = environment.urlBase;

  constructor(private http: HttpClient,
              private spinnerService: SpinnerService) {
  }

  get(uri: string,
      params?: HttpParams,
      startLoading = true,
      message = LoadingMessage.DEFAULT,
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'})): Observable<any> {

    if (startLoading) {
      this.spinnerService.startLoading(message);
    }

    return this.http
               .get<any>(this.urlBase + uri, 
                         {
                          headers, 
                          params
                        })      
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                      })
                    );
  }

  post(uri: string,
       body: any = {},
       params?: HttpParams,
       startLoading = true,
       message = LoadingMessage.DEFAULT,
       headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {
    
    if (startLoading) {
      this.spinnerService.startLoading(message);
    }    

    return this.http
               .post<any>(this.urlBase + uri,
                          headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? 
                                                           JSON.stringify(body) : body,
                          {
                            headers, 
                            params
                          })
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                      })
                    );
  }

  postLogin(uri: string,
            body: any = {},
            params?: HttpParams,
            startLoading = true,
            message = LoadingMessage.DEFAULT,
            headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {

    if (startLoading) {
      this.spinnerService.startLoading(message);
    }  

    return this.http
               .post<any>(uri,
                          headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
                          {
                           headers, 
                           params
                          })
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                      })
                     );      
  }

  put(uri: string,
      body: any = {},
      params?: HttpParams,
      startLoading = true,
      message = LoadingMessage.DEFAULT,
      headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {

    if (startLoading) {
      this.spinnerService.startLoading(message);
    }  

    return this.http
               .put<any>(this.urlBase + uri,
                         headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
                         {
                          headers, 
                          params
                        })
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                     })
                    );
  }

  patch(uri: string,
        body: any = {},
        params?: HttpParams,
        startLoading = true,
        message = LoadingMessage.DEFAULT,
        headers: HttpHeaders = new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})): Observable<any> {
    
    if (startLoading) {
      this.spinnerService.startLoading(message);
    }  

    return this.http
               .patch<any>(this.urlBase + uri,
                                headers.get('Content-Type') !== 'application/x-www-form-urlencoded' ? JSON.stringify(body) : body,
                                {
                                  headers, 
                                  params
                                })
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                     })
                    );
  }

  delete(uri: string,
         params?: HttpParams,
         startLoading = true,
         message = LoadingMessage.DEFAULT,
         headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'})): Observable<any> {

    if (startLoading) {
      this.spinnerService.startLoading(message);
    }  
          
    return this.http
               .delete<any>(this.urlBase + uri, {headers, params})
               .pipe(takeUntil(this.cancelHttpCall),
                     finalize(() => {
                        if (startLoading) {
                          this.spinnerService.stopLoading();
                        }
                      })
                    );
  }

  unsubscribeHttpCall() {
    this.cancelHttpCall.next();
  }
}
