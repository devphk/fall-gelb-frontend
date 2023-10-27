import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { HomeComponent, 
         PersonalInformationComponent, 
         SecurityComponent } from './components';
import { UserDashboardComponent } from './user-dashboard.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardSidebarComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhkThemeToggleModule, PhkUserAccountPopupModule } from '@shared/components';
import { PhkAppsListModule } from '@shared/components/phk-apps-list/phk-apps-list.module';
import { AvatarModule } from 'ngx-avatar';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PhkUserAccountHeaderModule } from '@shared/components/phk-user-account-header/phk-user-account-header.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PersonalInformationComponent,
    SecurityComponent,
    HomeComponent,
    UserDashboardComponent,
    DashboardSidebarComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    PhkUserAccountHeaderModule,
    FlexLayoutModule,
    AvatarModule,
    MatCardModule
  ]
})
export class UserDashboardModule { }
