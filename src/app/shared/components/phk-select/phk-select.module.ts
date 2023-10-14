import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSelectComponent } from './phk-select.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhkSelectComponent
  ],
  exports: [
    PhkSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhkSelectModule { }
