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
  NewWarehouseComponent,
  NewCustomsComponent,
  NewTruckTypeComponent,
  NewContainerTypeComponent,
  NewCommodityTypeComponent,
} from './views/components';

import {
  BankComponent,
  BankAccountComponent,
  CurrencyComponent,
  CustomsComponent,
  CommodityTypeComponent,
  TruckTypeComponent,
  UnitsComponent,
  WarehouseComponent,
  ContainerTypeComponent,
} from './views';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PhkConfirmationDialogModule } from '@shared/components/phk-confirmation-dialog/phk-confirmation-dialog.module';
import { UsersComponent } from './views/users';
import { CargoTypeLclComponent } from './views/cargo-type-lcl/cargo-type-lcl.component';
import { FormCargoTypeLclComponent } from './views/components/form-cargo-type-lcl/form-cargo-type-lcl.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    NewCommodityTypeComponent,
    NewWarehouseComponent,
    NewUnitsComponent,
    NewCustomsComponent,
    NewTruckTypeComponent,
    NewContainerTypeComponent,
    SettingsComponent,
    CommodityTypeComponent,
    BankAccountComponent,
    BankComponent,
    CurrencyComponent,
    UsersComponent,
    UnitsComponent,
    WarehouseComponent,
    CustomsComponent,
    TruckTypeComponent,
    ContainerTypeComponent,
    FormBankAccountComponent,
    FormBankComponent,
    FormCurrencyComponent,
    FormUserComponent,
    CargoTypeLclComponent,
    FormCargoTypeLclComponent,
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
    PhkConfirmationDialogModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    PhkConfirmationDialogModule
  ]
})
export class SettingsModule {}
