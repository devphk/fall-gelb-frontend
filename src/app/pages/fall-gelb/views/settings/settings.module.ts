import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
  PhkConfirmationDialogModule,
} from '@shared/components';

import {
  FormBankComponent,
  FormBankAccountComponent,
  FormCurrencyComponent,
  FormUserComponent,
  FormUnitsComponent,
  FormWarehouseComponent,
  FormCustomsComponent,
  FormContainerTypeComponent,
  FormCommodityTypeComponent,
  FormPaymentTermComponent,
  FormDepartmentComponent,
  FormConfigsComponent,
  FormCargoTypeLclComponent,
  FormRetentionConceptsComponent,
  FormCurrencyRatesComponent,
  FormContractTypeComponent,
  FormTruckTypeComponent,
  FormConceptsComponent
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
  PaymentTermComponent,
  DepartmentComponent,
  UsersComponent,
  CargoTypeLclComponent,
  RetentionConceptComponent,
  CurrencyRatesComponent,
  ContractTypeComponent,
  ConfigsComponent
} from './views';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConceptsComponent } from './views/concepts';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    FormCommodityTypeComponent,
    FormWarehouseComponent,
    FormUnitsComponent,
    FormCustomsComponent,
    FormTruckTypeComponent,
    FormContainerTypeComponent,
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
    ConfigsComponent,
    FormConfigsComponent,
    CargoTypeLclComponent,
    FormCargoTypeLclComponent,
    PaymentTermComponent,
    FormPaymentTermComponent,
    RetentionConceptComponent,
    FormRetentionConceptsComponent,
    CurrencyRatesComponent,
    FormCurrencyRatesComponent,
    DepartmentComponent,
    FormDepartmentComponent,
    ContractTypeComponent,
    FormContractTypeComponent,
    ConceptsComponent,
    FormConceptsComponent
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
    PhkConfirmationDialogModule,
  ],
  providers: [DatePipe],
})
export class SettingsModule {}
