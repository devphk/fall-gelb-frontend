import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private httpService: HttpService) { }

  signIn(userName: string,
         password: string) {

    let body = {
      grant_type: "password",
      client_id: environment.oAuthClientId,
      client_secret: environment.oAuthClientToken,
      username: userName,
      password: password
    }

    return this.httpService.postLogin("http://fallgelb-api.phoinikel.com/oauth/token", body);
  }
}
