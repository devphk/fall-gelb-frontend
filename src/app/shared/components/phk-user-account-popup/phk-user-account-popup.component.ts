import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fadeFastAnimation } from '@shared/animations';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
  selector: 'app-phk-user-account-popup',
  templateUrl: './phk-user-account-popup.component.html',
  styleUrls: ['./phk-user-account-popup.component.scss'],
  animations: [fadeFastAnimation]
})
export class PhkUserAccountPopupComponent {
  
  @Input() clickingInOutsideButton: boolean = false;

  constructor(private elementRef: ElementRef,
              private homeService: HomeService,
              private router: Router) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

      // Check if the click was outside the element
      if (targetElement && !this.elementRef.nativeElement.contains(targetElement)
          && !this.clickingInOutsideButton) {
        this.homeService.toggleUserAccount = false;
      }
  }

  openDashboard() {
    this.router.navigate(['user-dashboard']);
  }

  logout() {
    sessionStorage.removeItem('fallgelb');
    this.homeService.logout.next();
    this.router.navigate(['home']);
  }

}
