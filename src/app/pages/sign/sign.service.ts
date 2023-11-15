import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment';
import { LoginResponse } from '@shared/models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private httpService: HttpService) { }

  signIn(userName: string,
         password: string): Observable<LoginResponse> {

    let body = {
      grant_type: "password",
      client_id: environment.oAuthClientId,
      client_secret: environment.oAuthClientToken,
      username: userName,
      password: password
    }

    return this.httpService.postLogin(environment.urlOAuth, body);
  }
}
