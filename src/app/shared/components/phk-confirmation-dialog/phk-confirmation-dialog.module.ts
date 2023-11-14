import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhkConfirmationDialogComponent } from './phk-confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PhkConfirmationDialogComponent],
  exports:[PhkConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class PhkConfirmationDialogModule { }
