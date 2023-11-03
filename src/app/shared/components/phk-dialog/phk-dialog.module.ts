import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkDialogComponent } from './phk-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PhkDialogComponent
  ],
  exports: [
    PhkDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PhkDialogModule { }
