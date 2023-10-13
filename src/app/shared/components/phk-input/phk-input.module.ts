import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkInputComponent } from './phk-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    PhkInputComponent
  ],
  exports: [
    PhkInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class PhkInputModule { }
