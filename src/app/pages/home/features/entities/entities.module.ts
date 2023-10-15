import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';

const routes: Routes = [
  {
    path: '',
    component: EntitiesComponent
  }
];

@NgModule({
  declarations: [
    EntitiesComponent,
    NewCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesModule { }
