import { MatIconModule } from '@angular/material/icon';
import { PhkInputModule } from './../../../../shared/components/phk-input/phk-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormUserComponent } from './user/form-user/form-user.component';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { BankComponent } from './bank/bank.component';
import { FormBankComponent } from './bank/form-bank/form-bank.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormCurrencyComponent } from './currency/form-currency/form-currency.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    UserComponent,
    FormUserComponent,
    BankComponent,
    FormBankComponent,
    CurrencyComponent,
    FormCurrencyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkInputModule,
    PhkSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatOptionModule,
  ],
})
export class SettingsModule {}
