import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { PhkSlideToggleModule } from 'src/app/shared/components/phk-slide-toggle/phk-slide-toggle.module';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';

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
    PhkSlideToggleModule,
    ReactiveFormsModule,
    PhkDatePickerModule
  ]
})
export class DashboardModule { }
