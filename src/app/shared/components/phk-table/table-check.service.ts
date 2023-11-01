import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableCheckService {

  private messageSource = new BehaviorSubject(404);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

    changeMessage(id: number) {
    this.messageSource.next(id)
  }

}
