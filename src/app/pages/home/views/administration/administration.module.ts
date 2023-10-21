import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent
  }
];

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkTableModule
  ]
})
export class AdministrationModule { }
