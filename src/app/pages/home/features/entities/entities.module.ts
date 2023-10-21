import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { PhkTableModule } from 'src/app/shared/components/phk-table/phk-table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    PhkTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class EntitiesModule { }
