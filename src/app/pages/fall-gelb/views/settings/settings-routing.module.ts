import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  UserComponent,
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
} from './views';
import { SettingsComponent } from './settings.component';
import { UnitsComponent } from './views/units/units.component';
import { ContainerTypeComponent } from './views/container-type/container-type.component';
import { CustomsComponent } from './views/customs/customs.component';
import { TruckTypeComponent } from './views/truck-type/truck-type.component';
import { GoodsTypeComponent } from './views/goods-type/goods-type.component';
import { WarehouseComponent } from './views/warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'banks',
    component: BankComponent,
  },
  {
    path: 'bank-acounts',
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
    path: '**',
    component: SettingsComponent,
    pathMatch: 'full',
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
    path: 'goodstype',
    component: GoodsTypeComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
