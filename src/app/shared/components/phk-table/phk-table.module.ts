import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkTableComponent } from './phk-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivePipe } from '@shared/pipes/active.pipe';

@NgModule({
  declarations: [
    PhkTableComponent,
    ActivePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule,
    MatPaginatorModule
  ],
  exports: [
    PhkTableComponent
  ]
})
export class PhkTableModule { }
