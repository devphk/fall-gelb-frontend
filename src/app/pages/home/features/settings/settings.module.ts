import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NewWarehouseComponent } from './components/new-warehouse/new-warehouse.component';
import { MatButtonModule } from '@angular/material/button';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { PhkTextAreaModule } from 'src/app/shared/components/phk-text-area/phk-text-area.module';
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
    NewWarehouseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    PhkInputModule,
    PhkTextAreaModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
