import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NewUnitsComponent } from './components/new-units/new-units.component';

import { MatButtonModule } from '@angular/material/button';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    NewUnitsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    PhkInputModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SettingsModule { }
