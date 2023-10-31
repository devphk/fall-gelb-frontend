import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkUserAccountButtonsComponent } from './phk-user-account-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { PhkAppsListModule } from '../phk-apps-list/phk-apps-list.module';
import { PhkUserAccountPopupModule } from '../phk-user-account-popup';
import { PhkThemeToggleModule } from '../phk-theme-toggle';



@NgModule({
  declarations: [
    PhkUserAccountButtonsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AvatarModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    OverlayModule,
    PhkAppsListModule,
    PhkUserAccountPopupModule,
    PhkThemeToggleModule
  ],
  exports: [
    PhkUserAccountButtonsComponent
  ]
})
export class PhkUserAccountButtonsModule { }
