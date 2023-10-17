import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { SessionGuard } from './core/guards/guards/session.guard';
import { CoreModule } from './core/core.module';
import { TestComponent } from './shared/components/test/test.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    SessionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
