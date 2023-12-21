import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { PhkAppsListModule } from '@shared/components/phk-apps-list/phk-apps-list.module';
import { PhkUserAccountPopupModule } from '@shared/components/phk-user-account-popup/phk-user-account-popup.module';
import { PhkThemeToggleModule } from '@shared/components';
import { MatIconModule } from '@angular/material/icon';
import { PhkUserAccountHeaderComponent } from './phk-user-account-header.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PhkUserAccountHeaderComponent
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
    PhkThemeToggleModule,
    MatTooltipModule
  ],
  exports: [
    PhkUserAccountHeaderComponent
  ]
})
export class PhkUserAccountHeaderModule { }
