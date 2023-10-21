import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';

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
    RouterModule.forChild(routes),
    PhkTableModule
  ]
})
export class OperationsModule { }
