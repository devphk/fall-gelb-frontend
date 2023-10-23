import { Component, Input, OnInit } from '@angular/core';
import { fadeFastAnimation } from '@shared/animations';

@Component({
  selector: 'app-phk-apps-list',
  templateUrl: './phk-apps-list.component.html',
  styleUrls: ['./phk-apps-list.component.scss'],
  animations: [fadeFastAnimation]
})
export class PhkAppsListComponent implements OnInit {


  @Input() appsList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
