import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from '@shared/components/phk-table/phk-table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
import { PhkInputModule, PhkSelectModule, PhkSlideToggleModule, PhkTextAreaModule } from '@shared/components';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    NewProviderComponent
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
    FlexLayoutModule
  ]
})
export class EntitiesModule { }
