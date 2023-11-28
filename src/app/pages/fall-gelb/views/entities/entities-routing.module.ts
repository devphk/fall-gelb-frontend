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
import { EmployeesComponent } from './views/employees/employees.component';
import { DocumentValidationsComponent } from './views/document-validations';

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
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'document-validations',
    component: DocumentValidationsComponent,
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
