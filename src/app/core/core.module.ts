import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, ToastService } from './services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    DialogService,
    ToastService,
    MatDialog
  ],
  exports: [
    FlexLayoutModule,
    MatDialogModule
  ]
})
export class CoreModule { }
