import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NewGoodsTypeComponent } from './components/new-goods-type/new-goods-type.component';

import { MatButtonModule } from '@angular/material/button';

import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    NewGoodsTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    PhkInputModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
