import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhkConfirmationDialogComponent } from './phk-confirmation-dialog.component';



@NgModule({
  declarations: [PhkConfirmationDialogComponent],
  exports:[PhkConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class PhkConfirmationDialogModule { }
