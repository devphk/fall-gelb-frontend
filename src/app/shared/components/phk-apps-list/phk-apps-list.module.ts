import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkAppsListComponent } from './phk-apps-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeService } from 'src/app/pages/home/home.service';

@NgModule({
  declarations: [
    PhkAppsListComponent
  ],
  exports: [
    PhkAppsListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  providers: [
    HomeService
  ]
})
export class PhkAppsListModule { }
