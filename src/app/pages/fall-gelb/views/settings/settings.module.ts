import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { PhkInputModule, PhkTableModule, PhkTextAreaModule } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { NewWarehouseComponent } from './views/components/new-warehouse/new-warehouse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { WarehouseComponent } from './views/warehouse/warehouse.component';
import { MatIconModule } from '@angular/material/icon';
import { SettingsRoutingModule } from './views/settings-routing.module';

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
    NewWarehouseComponent,
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkInputModule,
    PhkTextAreaModule,
    PhkTableModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
