import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  AirConsolidatorsComponent,
  AirlinesComponent,
  CustomersComponent,
  DriversComponent,
  ProvidersComponent,
  ShippingCompaniesComponent,
  TerrestrialsComponent,
} from './views';
import { ViewProviderComponent } from './views/components/view-provider/view-provider.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'providers',
    pathMatch: 'full',
  },
  {
    path: 'providers',
    component: ProvidersComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'shipping-companies',
    component: ShippingCompaniesComponent,
  },
  {
    path: 'air-consolidators',
    component: AirConsolidatorsComponent,
  },
  {
    path: 'airlines',
    component: AirlinesComponent,
  },
  {
    path: 'terrestrials',
    component: TerrestrialsComponent,
  },
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'providers/view/:id/:name',
    component: ViewProviderComponent,
  },
  {
    path: '**',
    component: ProvidersComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitiesRoutingModule {}
