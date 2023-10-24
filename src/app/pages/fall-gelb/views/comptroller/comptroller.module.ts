import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptrollerComponent } from './comptroller.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';

const routes: Routes = [
  {
    path: '',
    component: ComptrollerComponent
  }
];

@NgModule({
  declarations: [
    ComptrollerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhkTableModule
  ]
})
export class ComptrollerModule { }
