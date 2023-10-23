import { Component, OnInit } from '@angular/core';
import { fadeFastAnimation } from '@shared/animations';

@Component({
  selector: 'app-phk-user-account-popup',
  templateUrl: './phk-user-account-popup.component.html',
  styleUrls: ['./phk-user-account-popup.component.scss'],
  animations: [fadeFastAnimation]
})
export class PhkUserAccountPopupComponent implements OnInit {

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
