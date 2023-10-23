import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { PhkSearchResultModule } from 'src/app/shared/components/phk-search-result/phk-search-result.module';

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
    RouterModule.forChild(routes),
    PhkSearchResultModule
  ]
})
export class EntitiesModule { }
