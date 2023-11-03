import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeAnimation, fadeFastAnimation } from '@shared/animations';
import { PhkThemeToggleService } from '@shared/components';
import { Mode } from '@shared/models';
import { HomeService } from '../../home.service';
import { fastAnimation } from '@shared/animations/fast-animation';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fastAnimation]
})
export class SearchComponent implements OnDestroy {

  public show: boolean = false;
  inputActive: boolean = false;
  appsOverlayOpened = false;
  userAccountOverlayOpened = false;
  search: string = '';

  appsList: any[] = [
    {
      appName: 'Truck',
      appLogo: 'src/assets/images/google.png',
    },
    {
      appName: 'Customs',
      appLogo: 'src/assets/images/google.png'
    },
    {
      appName: 'Express',
      appLogo: 'src/assets/images/google.png'
    }
  ];

  clickingAppsButton: boolean = false;
  clickingUserButton: boolean = false;
  isLogged: boolean = false;

  // subscriptions

  logoutSubscription: Subscription = this.homeService
                                         .logout$
                                         .subscribe(() => this.isLogged = false);

  constructor(public homeService: HomeService,
              private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('fallgelb')) {
      this.isLogged = true;
    }
  }

  toggleAppsList() {

    this.clickingAppsButton = true;
    this.homeService.toggleAppsList = !this.homeService.toggleAppsList;
    this.homeService.toggleAppsList ? 
    this.homeService.appsListOpened = true : 
    this.homeService.appsListOpened = false;

    setTimeout(() => {
      this.clickingAppsButton = false;
    }, 100);
  }

  toggleUserAccount() {
    this.clickingUserButton = true;
    this.homeService.toggleUserAccount = !this.homeService.toggleUserAccount;
    this.homeService.toggleUserAccount ? 
    this.homeService.userAccountOpened = true : 
    this.homeService.userAccountOpened = false;
    setTimeout(() => {
      this.clickingUserButton = false;
    }, 100);
  }

  showInput() {
    this.show = !this.show;
    console.log(this.search);
  }

  signIn() {
    this.router.navigate(['sign']);
  }

  ngOnDestroy(): void {
    this.logoutSubscription.unsubscribe();
  }

}
