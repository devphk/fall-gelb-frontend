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

@Injectable()
export class HttpRequestsResponseInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) {
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
            // this.ToastService.show({
            //   text: 'Sign in again', 
            //   type: 'warning'
            // });
            this.router.navigate(['']);
            break;
          case 500:
            // this.ToastService.show({
            //   text: 'Something bad happened, try again later', 
            //   type: 'error'
            // });
            break;
          case 502:
            // this.ToastService.show({
            //   text: 'Bad gateway', 
            //   type: 'error'
            // });
            break;
        }
        return throwError(error);
      })
    );
  }

}
