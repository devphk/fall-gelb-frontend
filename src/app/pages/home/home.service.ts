import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  toggleAppsList: boolean = false;
  toggleUserAccount: boolean = false;

  appsListOpened: boolean = false;
  userAccountOpened: boolean = false;

  constructor() { }
}
