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
import { MatMenuModule } from '@angular/material/menu';
import { AppsComponent } from './components/apps/apps.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    SearchComponent,
    AppsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    AvatarModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    OverlayModule
  ]
})
export class HomeModule { }
