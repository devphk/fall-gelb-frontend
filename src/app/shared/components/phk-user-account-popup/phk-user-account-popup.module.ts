import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkUserAccountPopupComponent } from './phk-user-account-popup.component';
import { AvatarModule } from 'ngx-avatar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PhkUserAccountPopupComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  exports: [
    PhkUserAccountPopupComponent
  ]
})
export class PhkUserAccountPopupModule { }
