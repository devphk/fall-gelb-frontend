import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { NewContainerTypeComponent } from './views/components/new-container-type/new-container-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhkInputModule } from '@shared/components';
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
    NewContainerTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    PhkInputModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
