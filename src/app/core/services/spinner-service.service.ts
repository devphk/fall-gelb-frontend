import { Injectable } from '@angular/core';
import { LoadingMessage } from '@shared/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingStatus: Subject<boolean> = new Subject();
  $loadingStatus = this.loadingStatus.asObservable();
  message: LoadingMessage = LoadingMessage.DEFAULT;
  
  constructor() { }

  Loading(value: boolean, message: LoadingMessage = LoadingMessage.DEFAULT) {
    this.message = message;
    this.loadingStatus.next(value);
  }

  startLoading(message: LoadingMessage): void {
    this.Loading(true, message);
  }

  stopLoading(): void {
    this.Loading(false);
  }
}
