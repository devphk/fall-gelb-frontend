import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SettingsRoutingModule } from './settings-routing.module';
import {
  PhkInputModule,
  PhkTableModule,
  PhkThemeToggleModule,
  PhkSelectModule,
  PhkTextAreaModule,
  PhkSlideToggleModule,
} from '@shared/components';

import {
  FormBankComponent,
  FormBankAccountComponent,
  FormCurrencyComponent,
  FormUserComponent,
  NewUnitsComponent,
  NewGoodsTypeComponent,
  NewWarehouseComponent,
  NewCustomsComponent,
  NewTruckTypeComponent,
  NewContainerTypeComponent,
} from './views/components';

import {
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
  CustomsComponent,
  GoodsTypeComponent,
  TruckTypeComponent,
  UnitsComponent,
  UserComponent,
  WarehouseComponent,
  ContainerTypeComponent,
} from './views';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    NewGoodsTypeComponent,
    NewWarehouseComponent,
    NewUnitsComponent,
    NewCustomsComponent,
    NewTruckTypeComponent,
    NewContainerTypeComponent,
    SettingsComponent,
    GoodsTypeComponent,
    BankAccountComponent,
    BankComponent,
    CurrencyComponent,
    UserComponent,
    UnitsComponent,
    WarehouseComponent,
    CustomsComponent,
    TruckTypeComponent,
    ContainerTypeComponent,
    FormBankAccountComponent,
    FormBankComponent,
    FormCurrencyComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    SettingsRoutingModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatOptionModule,
    MatFormFieldModule,
    PhkTableModule,
    PhkThemeToggleModule,
    PhkSelectModule,
    PhkTextAreaModule,
    PhkSlideToggleModule,
    MatCardModule,
    MatSelectModule,
  ],
})
export class SettingsModule {}
