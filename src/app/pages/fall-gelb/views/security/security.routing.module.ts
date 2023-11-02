import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RolesComponent } from './views';
import { SecurityComponent } from './security.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: '**',
    component: SecurityComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
