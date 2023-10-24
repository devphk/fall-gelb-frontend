import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  UserComponent,
  AgentsComponent,
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
} from './views';
import { SettingsComponent } from './settings.component';

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
    path: 'agents',
    component: AgentsComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
