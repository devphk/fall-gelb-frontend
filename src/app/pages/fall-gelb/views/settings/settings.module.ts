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
import { UnitsComponent } from './views/units/units.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    NewUnitsComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SettingsRoutingModule,
    PhkInputModule,
    PhkTableModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SettingsModule { }
