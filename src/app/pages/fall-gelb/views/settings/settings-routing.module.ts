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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
