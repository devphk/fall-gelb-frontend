import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  private newTokenSub = new Subject();
  newToken$ = this.newTokenSub.asObservable();

  constructor() {
  }

  emitNewToken(token: string): void {
    this.newTokenSub.next(token);
  }

  decodeToken() {
    return new JwtHelperService().decodeToken(this.getToken());
  }

  saveToken(token: string) {
    sessionStorage.setItem('fallgelb', token);
  }

  getToken(): string {
    let sessionToken = sessionStorage.getItem('fallgelb');
    if (sessionToken !== null) {
      return sessionToken;
    } else {
      return "";
    }
  }

  clearToken() {
    sessionStorage.removeItem('fallgelb');
  }

}
