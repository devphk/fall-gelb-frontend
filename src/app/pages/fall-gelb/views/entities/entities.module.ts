import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from '@shared/components/phk-table/phk-table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ProvidersComponent } from './views/providers/providers.component';
import { CustomersComponent } from './views/customers/customers.component';

import { DriversComponent } from './views/drivers/drivers.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeesComponent } from './views/employees/employees.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatInputModule } from '@angular/material/input';
import { DocumentValidationsComponent } from './views/document-validations';
import { MatCardModule } from '@angular/material/card';
import { PhkFileInputComponent } from '@shared/components/phk-file-input/phk-file-input.component';
import {
  FormProviderComponent,
  FormDriverComponent,
  FormCustomerComponent,
  ViewProviderComponent,
  FormProviderServicesComponent,
  FormEmployeeComponent,
  FormDocumentValidationsComponent,
  ProviderModalComponent,
  ProviderDocumentsComponent,
  FormProviderDocumentsComponent,
} from './views/components';
import {
  PhkDatePickerModule,
  PhkInputModule,
  PhkSelectModule,
  PhkSlideToggleModule,
  PhkTextAreaModule,
} from '@shared/components';

@NgModule({
  declarations: [
    ProvidersComponent,
    CustomersComponent,
    DriversComponent,
    EntitiesComponent,
    ProvidersComponent,
    FormProviderComponent,
    FormDriverComponent,
    FormCustomerComponent,
    ViewProviderComponent,
    FormProviderServicesComponent,
    EmployeesComponent,
    FormEmployeeComponent,
    DocumentValidationsComponent,
    FormDocumentValidationsComponent,
    ProviderModalComponent,
    ProviderDocumentsComponent,
    FormProviderDocumentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EntitiesRoutingModule,
    PhkTableModule,
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
    PhkDatePickerModule,
    PhkDatePickerModule,
    NgxMaterialTimepickerModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    PhkFileInputComponent,
  ],
})
export class EntitiesModule {}
