import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, ToastService } from './services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    DialogService,
    ToastService,
    MatDialog
  ]
})
export class CoreModule { }
