import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  PhkInputModule,
  PhkTableModule,
  PhkThemeToggleModule,
  PhkSelectModule,
  PhkTextAreaModule,
  PhkSlideToggleModule,
} from '@shared/components';
import { NewUnitsComponent } from './views/components/new-units/new-units.component';
import { UnitsComponent } from './views/units/units.component';
import { BankComponent } from './views/bank/bank.component';
import { BankAccountComponent } from './views/bank-account/bank-account.component';
import { CurrencyComponent } from './views/currency/currency.component';
import { UserComponent } from './views/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SettingsRoutingModule } from './settings-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NewGoodsTypeComponent } from './views/components/new-goods-type/new-goods-type.component';
import { GoodsTypeComponent } from './views/goods-type/goods-type.component';
import {
  FormBankAccountComponent,
  FormBankComponent,
  FormCurrencyComponent,
  FormUserComponent,
} from './views/components';
import { NewWarehouseComponent } from './views/components/new-warehouse/new-warehouse.component';
import { WarehouseComponent } from './views/warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsComponent,
    NewGoodsTypeComponent,
    GoodsTypeComponent,
    BankAccountComponent,
    BankComponent,
    CurrencyComponent,
    UserComponent,
    UnitsComponent,
    NewUnitsComponent,
    FormBankAccountComponent,
    FormBankComponent,
    FormCurrencyComponent,
    FormUserComponent,
    NewWarehouseComponent,
    WarehouseComponent,
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
    PhkTextAreaModule,
    PhkTableModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
