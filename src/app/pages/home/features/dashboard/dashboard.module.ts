import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { ModalService } from 'src/app/core/services';
import { MatButtonModule } from '@angular/material/button';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import { PhkSearcherResultAuxiliaryModule } from 'src/app/shared/components/phk-searcher-result-auxiliary/phk-searcher-result-auxiliary.module';

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
    PhkSearcherResultAuxiliaryModule,
  ],
})
export class DashboardModule {}
