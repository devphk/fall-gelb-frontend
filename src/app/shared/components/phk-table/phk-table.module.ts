import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkTableComponent } from './phk-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    PhkTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    PhkTableComponent
  ]
})
export class PhkTableModule { }
