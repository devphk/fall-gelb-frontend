import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import { FormRecordComponent } from './views/components/form-record/form-record.component';
import { RecordComponent } from './views/record/record.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  PhkInputModule,
  PhkSelectModule,
  PhkTextAreaModule,
  PhkSlideToggleModule,
  PhkDatePickerModule,
} from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
  },
];

@NgModule({
  declarations: [RecordComponent, FormRecordComponent, OperationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    OperationsRoutingModule,
    PhkTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    PhkInputModule,
    PhkSelectModule,
    MatOptionModule,
    PhkTextAreaModule,
    PhkSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    PhkDatePickerModule,
  ],
})
export class OperationsModule {}
