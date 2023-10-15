import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService, ToastService } from './services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    ModalService,
    ToastService,
    MatDialog
  ]
})
export class CoreModule { }
