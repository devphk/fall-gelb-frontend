import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class FallGelbService {

  toggleSidenav = new Subject();
  toggleSidenav$ = this.toggleSidenav.asObservable();

  constructor() { }

  private drawer!: MatDrawer;

  // setDrawer
  public setDrawer(flyout: MatDrawer) {
    this.drawer = flyout;
  }

  // open
  public open() {
    return this.drawer.open();
  }

  public isOpend() {
    return this.drawer.opened;
  }

  // close
  public close() {
    return this.drawer.close();
  }

  // toggle
  public toggle(): void {
    this.drawer.toggle();
  }
}
