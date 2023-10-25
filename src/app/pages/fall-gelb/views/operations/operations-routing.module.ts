import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecordComponent } from './views';
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
