import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableCheckService {
  private messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(id: number, check: boolean) {
    this.messageSource.next({
      id: id,
      check: check,
    });
  }
}
