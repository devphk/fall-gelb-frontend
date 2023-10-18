import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NewContainerTypeComponent } from './components/new-container-type/new-container-type.component';

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
    NewContainerTypeComponent
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
