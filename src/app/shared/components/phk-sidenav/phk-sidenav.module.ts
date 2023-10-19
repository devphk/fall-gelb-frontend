import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSidenavComponent } from './phk-sidenav.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PhkSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    PhkSidenavComponent
  ]
})
export class PhkSidenavModule { }
