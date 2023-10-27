import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  PhkTableModule,
  PhkInputModule,
  PhkSelectModule,
  PhkTextAreaModule,
  PhkSlideToggleModule,
} from '@shared/components';
import { BankComponent } from './views/bank/bank.component';
import { BankAccountComponent } from './views/bank-account/bank-account.component';
import { CurrencyComponent } from './views/currency/currency.component';
import { UserComponent } from './views/user/user.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatCardModule } from '@angular/material/card';
import {
  FormBankAccountComponent,
  FormBankComponent,
  FormCurrencyComponent,
  FormUserComponent,
} from './views/components';

@NgModule({
  declarations: [
    SettingsComponent,
    BankComponent,
    BankAccountComponent,
    CurrencyComponent,
    UserComponent,
    FormBankComponent,
    FormBankAccountComponent,
    FormCurrencyComponent,
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SettingsRoutingModule,
    PhkTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    PhkInputModule,
    PhkSelectModule,
    MatOptionModule,
    PhkTextAreaModule,
    PhkSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class SettingsModule {}
