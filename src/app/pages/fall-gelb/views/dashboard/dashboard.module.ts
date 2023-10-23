import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { MatButtonModule } from '@angular/material/button';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import { PhkSearchResultModule } from '@shared/components/phk-search-result/phk-search-result.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PhkDatePickerModule,
    MatButtonModule,
    PhkTableModule,
    PhkSearchResultModule
  ]
})
export class DashboardModule { }