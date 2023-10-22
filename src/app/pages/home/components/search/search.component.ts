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

  appList: any[] = [
    {
      appName: 'Truck',
      appLogo: ''
    },
    {
      appName: 'Customs',
      appLogo: ''
    },
    {
      appName: 'Express',
      appLogo: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
