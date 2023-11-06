import { Component, Input, OnInit } from '@angular/core';
import { fadeAnimation, fadeFastAnimation } from '@shared/animations';
import { PhkThemeToggleService } from '@shared/components';
import { Mode } from '@shared/models';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
  selector: 'app-phk-user-account-header',
  templateUrl: './phk-user-account-header.component.html',
  styleUrls: ['./phk-user-account-header.component.scss'],
  animations: [fadeFastAnimation]
})
export class PhkUserAccountHeaderComponent {

  @Input() showLogo: boolean = false;
  @Input() showSearch: boolean = false;
  inputActive: boolean = false;
  appsOverlayOpened = false;
  userAccountOverlayOpened = false;

  appsList: any[] = [
    {
      appName: 'Truck',
      appLogo: 'src/assets/images/Recurso 12@4x.png',
    },
    {
      appName: 'Customs',
      appLogo: 'src/assets/images/Recurso 13@4x.png'
    },
    {
      appName: 'Express',
      appLogo: 'src/assets/images/Recurso 14@4x.png'
    }
  ];

  clickingAppsButton: boolean = false;
  clickingUserButton: boolean = false;

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
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
