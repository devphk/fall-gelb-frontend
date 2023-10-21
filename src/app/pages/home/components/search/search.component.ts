import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
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
