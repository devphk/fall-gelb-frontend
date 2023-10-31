import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './fall-gelb-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FallGelbService } from './fall-gelb.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PhkSidenavModule } from 'src/app/shared/components/phk-sidenav/phk-sidenav.module';
import { FallGelbComponent } from './fall-gelb.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PhkThemeToggleModule, PhkUserAccountButtonsModule, PhkUserAccountPopupModule } from '@shared/components';
import { PhkAppsListModule } from '@shared/components/phk-apps-list/phk-apps-list.module';
import { AvatarModule } from 'ngx-avatar';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [FallGelbComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    PhkSidenavModule,
    FlexLayoutModule,
    PhkThemeToggleModule,
    PhkAppsListModule,
    AvatarModule,
    PhkUserAccountPopupModule,
    OverlayModule,
    PhkUserAccountButtonsModule
  ],
  providers: [FallGelbService],
})
export class FallGelbModule {}
