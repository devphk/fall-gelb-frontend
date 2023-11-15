import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent, UserRolesComponent } from './views/';
import { FormRoleComponent } from './views/components';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {
  PhkInputModule,
  PhkSelectModule,
  PhkSlideToggleModule,
  PhkTableModule,
} from '@shared/components';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SecurityRoutingModule } from './security.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from '@core/services';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
  },
];

@NgModule({
  declarations: [
    SecurityComponent,
    RolesComponent,
    FormRoleComponent,
    UserRolesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SecurityRoutingModule,
    PhkTableModule,
    MatIconModule,
    MatButtonModule,
    PhkInputModule,
    PhkSelectModule,
    PhkSlideToggleModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [MatSnackBar, ToastService],
})
export class SecurityModule {}
