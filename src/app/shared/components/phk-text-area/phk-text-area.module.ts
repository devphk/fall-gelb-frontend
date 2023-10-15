import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkTextAreaComponent } from './phk-text-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    PhkTextAreaComponent
  ],
  exports: [
    PhkTextAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PhkTextAreaModule { }
