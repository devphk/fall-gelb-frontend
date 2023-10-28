import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { SessionGuard } from './core/guards/guards/session.guard';
import { CoreModule } from './core/core.module';
import {
  MODE_STORAGE_SERVICE,
  PhkThemeStorageService,
  PhkThemeToggleModule,
  PhkThemeToggleService,
} from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    CoreModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [
    SessionGuard,
    PhkThemeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: PhkThemeStorageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
