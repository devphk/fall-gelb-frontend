import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';


import { NewCustomsComponent } from './components/new-customs/new-customs.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    NewCustomsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSelectModule,
    PhkInputModule,
    PhkSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SettingsModule { }
