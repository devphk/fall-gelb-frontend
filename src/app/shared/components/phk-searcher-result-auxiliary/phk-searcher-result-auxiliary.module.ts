import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSearcherResultAuxiliaryComponent } from './phk-searcher-result-auxiliary.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PhkInputModule } from '../phk-input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhkSearcherResultAuxiliaryComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule,
    MatGridListModule,
    MatCardModule,
    PhkInputModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [PhkSearcherResultAuxiliaryComponent],
})
export class PhkSearcherResultAuxiliaryModule {}
