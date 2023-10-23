import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { PhkInputModule, PhkTableModule } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUnitsComponent } from './views/components/new-units/new-units.component';
import { MatIconModule } from '@angular/material/icon';
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
    NewUnitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkInputModule,
    PhkTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
