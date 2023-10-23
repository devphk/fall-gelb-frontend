import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CertificationComponent } from './views';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operations',
    pathMatch: 'full',
  },
  {
    path: 'operations',
    component: OperationsComponent,
  },
  {
    path: 'certifications',
    component: CertificationComponent,
  },
  {
    path: '**',
    component: OperationsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsRoutingModule {}
