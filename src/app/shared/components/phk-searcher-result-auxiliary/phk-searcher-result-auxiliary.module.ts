import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSearcherResultAuxiliaryComponent } from './phk-searcher-result-auxiliary.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PhkSearcherResultAuxiliaryComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [PhkSearcherResultAuxiliaryComponent],
})
export class PhkSearcherResultAuxiliaryModule {}
