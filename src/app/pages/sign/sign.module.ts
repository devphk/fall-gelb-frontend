import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SignService } from './sign.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhkSelectModule } from '@shared/components';
import { MatOptionModule } from '@angular/material/core';
import { PhkFileInputComponent } from '@shared/components/phk-file-input/phk-file-input.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent
  }
];

@NgModule({
  declarations: [
    SignComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    PhkInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    PhkSelectModule,
    MatOptionModule,
    PhkFileInputComponent
  ],
  providers: [
    SignService
  ]
})
export class SignModule { }
