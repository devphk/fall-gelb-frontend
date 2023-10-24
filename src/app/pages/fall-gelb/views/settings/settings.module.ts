import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { NewContainerTypeComponent } from './views/components/new-container-type/new-container-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhkInputModule, PhkTableModule } from '@shared/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SettingsRoutingModule } from './settings-routing.module';
import { ContainerTypeComponent } from './views/container-type/container-type.component';
import { MatIconModule } from '@angular/material/icon';
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
    NewContainerTypeComponent,
    ContainerTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PhkInputModule,
    PhkTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
