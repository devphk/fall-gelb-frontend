import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { PhkInputModule, PhkTextAreaModule } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { NewWarehouseComponent } from './views/agents/components/new-warehouse/new-warehouse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    AgentsComponent,
    NewWarehouseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkInputModule,
    PhkTextAreaModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
