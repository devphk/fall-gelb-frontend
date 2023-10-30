import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TokenService} from '../services/token.service';
import {catchError, finalize, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request: HttpRequest<any>;

    if (this.tokenService.getToken()) {
      request = this.setAuthHeader(req.clone());
    } else {
      request = req.clone();
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body) {

            if ('Token' in event.body) {
              this.tokenService.clearToken();
              this.tokenService.saveToken(event.body.Token);
              this.tokenService.emitNewToken(event.body.Token);
            }
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
      finalize(() => {
      })
    );
  }

  setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.tokenService.getToken()
      }
    });
  }
}
