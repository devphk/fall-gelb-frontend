import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './views/agents/agents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PhkInputModule } from '../../../../shared/components/phk-input/phk-input.module';
import { NewGoodsTypeComponent } from './views/components/new-goods-type/new-goods-type.component';
import { GoodsTypeComponent } from './views/goods-type/goods-type.component';
import { PhkTableModule } from '@shared/components';
import { MatIconModule } from '@angular/material/icon';
import { SettingsRoutingModule } from './views/settings-routing.module';
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
    NewGoodsTypeComponent,
    GoodsTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SettingsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PhkInputModule,
    PhkTableModule
  ]
})
export class SettingsModule { }
