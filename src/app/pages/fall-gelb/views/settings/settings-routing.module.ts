import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
  UnitsComponent,
  ContainerTypeComponent,
  CustomsComponent,
  TruckTypeComponent,
  WarehouseComponent,
  CommodityTypeComponent,
  PaymentTermComponent,
  UsersComponent,
  CargoTypeLclComponent,
  RetentionConceptComponent,
  CurrencyRatesComponent,
  DepartmentComponent,
  ContractTypeComponent,
} from './views';
import { SettingsComponent } from './settings.component';
import { ConfigsComponent } from './views/configs/configs.component';
import { ConceptsComponent } from './views/concepts';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'banks',
    component: BankComponent,
  },
  {
    path: 'bank-accounts',
    component: BankAccountComponent,
  },
  {
    path: 'currencies',
    component: CurrencyComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'units',
    component: UnitsComponent,
  },
  {
    path: 'container-type',
    component: ContainerTypeComponent,
  },
  {
    path: 'customs',
    component: CustomsComponent,
  },
  {
    path: 'truck-type',
    component: TruckTypeComponent,
  },
  {
    path: 'commodity-type',
    component: CommodityTypeComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
  },
  {
    path: 'configs',
    component: ConfigsComponent,
  },
  {
    path: 'cargo-type-lcl',
    component: CargoTypeLclComponent,
  },
  {
    path: 'payment-terms',
    component: PaymentTermComponent,
  },
  {
    path: 'retention-concepts',
    component: RetentionConceptComponent,
  },
  {
    path: 'currency-rates',
    component: CurrencyRatesComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'contract-types',
    component: ContractTypeComponent
  },
  {
    path: 'concepts',
    component: ConceptsComponent,
  },
  {
    path: '**',
    component: SettingsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
