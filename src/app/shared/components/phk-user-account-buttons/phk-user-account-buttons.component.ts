import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
  selector: 'app-phk-user-account-buttons',
  templateUrl: './phk-user-account-buttons.component.html',
  styleUrls: ['./phk-user-account-buttons.component.scss']
})
export class PhkUserAccountButtonsComponent implements OnInit {

  inputActive: boolean = false;
  appsOverlayOpened = false;
  userAccountOverlayOpened = false;

  appsList: any[] = [
    {
      appName: 'Truck',
      appLogo: 'assets/icons/Truck.png',
    },
    {
      appName: 'Customs',
      appLogo: 'assets/icons/Customs.png'
    },
    {
      appName: 'Express',
      appLogo: 'assets/icons/Express.png'
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
