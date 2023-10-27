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
  ],
  providers: [FallGelbService],
})
export class FallGelbModule {}
