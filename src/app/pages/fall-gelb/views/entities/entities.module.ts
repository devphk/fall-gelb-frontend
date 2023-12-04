import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from '@shared/components/phk-table/phk-table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ProvidersComponent } from './views/providers/providers.component';
import { CustomersComponent } from './views/customers/customers.component';
import { ShippingCompaniesComponent } from './views/shipping-companies/shipping-companies.component';
import { AirConsolidatorsComponent } from './views/air-consolidators/air-consolidators.component';
import { AirlinesComponent } from './views/airlines/airlines.component';
import { TerrestrialsComponent } from './views/terrestrials/terrestrials.component';
import { DriversComponent } from './views/drivers/drivers.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewProviderComponent } from './views/components/new-provider/new-provider.component';
import {
  PhkDatePickerModule,
  PhkInputModule,
  PhkSelectModule,
  PhkSlideToggleModule,
  PhkTextAreaModule,
} from '@shared/components';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewAirlineComponent } from './views/components/new-airline/new-airline.component';
import { NewConsolidatorComponent } from './views/components/new-consolidator/new-consolidator.component';
import { NewDriverComponent } from './views/components/new-driver/new-driver.component';
import { NewGroundtransportComponent } from './views/components/new-groundtransport/new-groundtransport.component';
import { NewShippingcompanyComponent } from './views/components/new-shippingcompany/new-shippingcompany.component';
import { NewCustomerComponent } from './views/components/new-customer/new-customer.component';
import { ViewProviderComponent } from './views/components/view-provider/view-provider.component';
import { FormProviderServicesComponent } from './views/components/form-provider-services/form-provider-services.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { NewEmployeeComponent } from './views/components/new-employee/new-employee.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatInputModule } from '@angular/material/input';
import { ProviderModalComponent } from './views/components/provider-modal/provider-modal.component';
import { ProviderDocumentsComponent } from './views/components/provider-documents/provider-documents.component';
import { MatCardModule } from '@angular/material/card';
import { FormProviderDocumentsComponent } from './views/components/form-provider-documents/form-provider-documents.component';
import { PhkFileInputComponent } from '@shared/components/phk-file-input/phk-file-input.component';

@NgModule({
  declarations: [
    ProvidersComponent,
    CustomersComponent,
    ShippingCompaniesComponent,
    AirConsolidatorsComponent,
    AirlinesComponent,
    TerrestrialsComponent,
    DriversComponent,
    EntitiesComponent,
    ProvidersComponent,
    NewProviderComponent,
    NewAirlineComponent,
    NewConsolidatorComponent,
    NewDriverComponent,
    NewGroundtransportComponent,
    NewShippingcompanyComponent,
    NewCustomerComponent,
    ViewProviderComponent,
    FormProviderServicesComponent,
    EmployeesComponent,
    NewEmployeeComponent,
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
    PhkFileInputComponent
  ],
})
export class EntitiesModule {}
