import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkTableComponent } from './phk-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivePipe } from '@shared/pipes/active.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PhkTableComponent
  ]
})
export class PhkTableModule { }
