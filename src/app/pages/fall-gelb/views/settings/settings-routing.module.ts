import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  UserComponent,
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
  UnitsComponent,
  ContainerTypeComponent,
  CustomsComponent,
  TruckTypeComponent,
  WarehouseComponent,
  CommodityTypeComponent,
} from './views';
import { SettingsComponent } from './settings.component';
import { CurrencyRatesComponent } from './views/currency-rates/currency-rates.component';

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
    component: UserComponent,
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
    path: 'currency-rates',
    component: CurrencyRatesComponent,
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
