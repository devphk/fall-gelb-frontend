import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  {
      path: '',
      component: SignComponent
  }
];

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ]
})
export class SignModule { }
