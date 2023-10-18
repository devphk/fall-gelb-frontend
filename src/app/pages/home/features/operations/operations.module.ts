import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';
import { CertificationComponent } from './certification/certification.component';
import { FormCertificationComponent } from './certification/form-certification/form-certification.component';
import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forChild(routes),
    PhkDatePickerModule,
    PhkSelectModule,
    PhkInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class OperationsModule {}
