import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EntitiesComponent
  }
];

@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesModule { }
