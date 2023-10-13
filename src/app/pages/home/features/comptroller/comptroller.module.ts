import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptrollerComponent } from './comptroller.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class ComptrollerModule { }
