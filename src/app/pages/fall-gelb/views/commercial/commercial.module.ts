import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial.component';
import { Routes, RouterModule } from '@angular/router';
// import { PhkTableModule } from '@shared/components/phk-table/phk-table.module';

const routes: Routes = [
  {
    path: '',
    component: CommercialComponent
  }
];

@NgModule({
  declarations: [
    CommercialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // PhkTableModule
  ]
})
export class CommercialModule { }
