import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkDialogComponent } from './phk-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PhkDialogComponent
  ],
  exports: [
    PhkDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class PhkDialogModule { }
