import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CertificationComponent, RecordComponent } from './views';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operation',
    pathMatch: 'full',
  },
  {
    path: 'records',
    component: RecordComponent,
    redirectTo: 'operations',
    pathMatch: 'full',
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
