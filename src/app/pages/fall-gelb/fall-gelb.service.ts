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
  setDrawer(flyout: MatDrawer) {
    this.drawer = flyout;
  }

  // open
  open() {
    return this.drawer.open();
  }

  isOpend() {
    return this.drawer.opened;
  }

  // close
  close() {
    return this.drawer.close();
  }

  // toggle
  toggle(): void {
    this.drawer.toggle();
  }
}
