import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSidenavComponent } from './phk-sidenav.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PhkSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule
  ],
  exports: [
    PhkSidenavComponent
  ]
})
export class PhkSidenavModule { }
