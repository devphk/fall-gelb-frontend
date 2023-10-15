import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSlideToggleComponent } from './phk-slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhkSlideToggleComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  exports: [
    PhkSlideToggleComponent
  ]
})
export class PhkSlideToggleModule { }
