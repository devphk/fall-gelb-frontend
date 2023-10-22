import { Component, OnInit } from '@angular/core';
import { fadeAnimation, fadeFastAnimation } from '@shared/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fadeFastAnimation]
})
export class SearchComponent implements OnInit {

  inputActive: boolean = false;
  isOpen = false;

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

  constructor() { }

  ngOnInit(): void {
  }

}
