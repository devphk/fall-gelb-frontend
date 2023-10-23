import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { NewTruckTypeComponent } from './views/components/new-truck-type/new-truck-type.component';
import { TruckTypeComponent } from './views/truck-type/truck-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PhkInputModule, PhkTableModule } from '@shared/components';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatButtonModule } from '@angular/material/button';
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
    AgentsComponent,
    NewTruckTypeComponent,
    TruckTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    PhkInputModule,
    PhkTableModule,
    SettingsRoutingModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SettingsModule { }
