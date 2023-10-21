import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components';
import { MatIconModule } from '@angular/material/icon';

// Import your AvatarModule
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    AvatarModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class HomeModule { }
