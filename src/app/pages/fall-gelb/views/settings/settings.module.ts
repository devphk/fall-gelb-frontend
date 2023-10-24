import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { NewCustomsComponent } from './views/components/new-customs/new-customs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PhkInputModule, PhkSelectModule, PhkTableModule } from '@shared/components';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomsComponent } from './views/customs/customs.component';
import { MatIconModule } from '@angular/material/icon';
import { SettingsRoutingModule } from './settings-routing.module';
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
    NewCustomsComponent,
    CustomsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    PhkInputModule,
    PhkSelectModule,
    MatSelectModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatIconModule,
    PhkTableModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
