import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent
  }
];

@NgModule({
  declarations: [
    OperationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationsModule { }
