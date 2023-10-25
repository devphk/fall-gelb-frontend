import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { CreateComponent } from './record/form-record/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { PhkSlideToggleModule } from 'src/app/shared/components/phk-slide-toggle/phk-slide-toggle.module';
import { MatDividerModule } from '@angular/material/divider';
const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
  },
];

@NgModule({
  declarations: [OperationsComponent, RecordComponent, CreateComponent],
  imports: [
    MatDividerModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    PhkDatePickerModule,
    PhkSelectModule,
    PhkInputModule,
    PhkSlideToggleModule,
  ],
})
export class OperationsModule {}
