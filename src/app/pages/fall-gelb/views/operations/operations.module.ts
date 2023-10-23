import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import {
  PhkDatePickerModule,
  PhkInputModule,
  PhkSelectModule,
  PhkSlideToggleModule,
  PhkTextAreaModule,
} from '@shared/components';
import { CertificationComponent } from './views/certification/certification.component';
import { FormCertificationComponent } from './views/components/form-certification/form-certification.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OperationsRoutingModule } from './operations-routing.module';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
  },
];

@NgModule({
  declarations: [
    OperationsComponent,
    CertificationComponent,
    FormCertificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OperationsRoutingModule,
    PhkTableModule,
    PhkDatePickerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    PhkInputModule,
    PhkSelectModule,
    MatOptionModule,
    PhkTextAreaModule,
    PhkSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
  ],
})
export class OperationsModule {}
