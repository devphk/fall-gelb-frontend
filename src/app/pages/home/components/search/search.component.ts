import { Component, OnInit } from '@angular/core';
import { fadeAnimation, fadeFastAnimation } from '@shared/animations';
import { PhkThemeToggleService } from '@shared/components';
import { Mode } from '@shared/models';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fadeFastAnimation]
})
export class SearchComponent implements OnInit {

  inputActive: boolean = false;
  appsOverlayOpened = false;
  userAccountOverlayOpened = false;

  appsList: any[] = [
    {
      appName: 'Truck',
      appLogo: '../../../../../assets/images/google.png',
    },
    {
      appName: 'Customs',
      appLogo: '../../../../../assets/images/google.png'
    },
    {
      appName: 'Express',
      appLogo: '../../../../../assets/images/google.png'
    }
  ];

  currentMode: Mode = Mode.LIGHT;
  themeSubscriptor = this.themeService
                         .modeChanged$
                         .subscribe((mode: Mode) => {
    this.currentMode = mode;
  });
  clickingAppsButton: boolean = false;
  clickingUserButton: boolean = false;

  constructor(private themeService: PhkThemeToggleService,
              public homeService: HomeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.themeSubscriptor.unsubscribe();
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
}
