import { Component, OnInit } from '@angular/core';
import { fadeAnimation, fadeFastAnimation } from '@shared/animations';
import { PhkThemeToggleService } from '@shared/components';
import { Mode } from '@shared/models';

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

  constructor(private themeService: PhkThemeToggleService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.themeSubscriptor.unsubscribe();
  }

}
