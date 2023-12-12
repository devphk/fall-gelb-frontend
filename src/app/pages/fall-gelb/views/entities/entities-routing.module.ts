import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  CustomersComponent,
  DriversComponent,
  ProvidersComponent,
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
