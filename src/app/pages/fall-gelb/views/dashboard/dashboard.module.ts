import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { MatButtonModule } from '@angular/material/button';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import { PhkSearchResultModule } from '@shared/components/phk-search-result/phk-search-result.module';
import { NgChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PhkDatePickerModule,
    MatButtonModule,
    PhkTableModule,
    NgChartsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule
  ],
})
export class DashboardModule {}
