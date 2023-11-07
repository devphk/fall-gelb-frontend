import {Injectable} from '@angular/core';
import {HttpErrorResponse, 
        HttpEvent, 
        HttpHandler, 
        HttpInterceptor, 
        HttpRequest, 
        HttpResponse} from '@angular/common/http';
import {Observable, 
        throwError} from 'rxjs';
import {catchError, 
        map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { ToastService } from '@core/services';

@Injectable()
export class HttpRequestsResponseInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router,
              private toastService: ToastService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 403:
            this.toastService.showToaster('No autorizado', true);
            this.router.navigate(['']);
            break;
          case 500:
            this.toastService.showToaster('Ocurrió un problema, intenta más tarde', true);
            break;
          case 502:
            this.toastService.showToaster('Ocurrió un problema, intenta más tarde', true);
            break;
        }
        return throwError(error);
      })
    );
  }

}
