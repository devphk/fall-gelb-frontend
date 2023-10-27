import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { PhkUserAccountHeaderModule } from '@shared/components/phk-user-account-header/phk-user-account-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PhkUserAccountHeaderModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
