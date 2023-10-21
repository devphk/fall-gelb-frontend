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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    ProvidersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EntitiesRoutingModule,
    PhkTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule
  ]
})
export class EntitiesModule { }
