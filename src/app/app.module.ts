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
import { NgChartsModule } from 'ng2-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenService } from '@core/services/token.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

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
    NgChartsModule,
    HttpClientModule,
    MatTooltipModule,
    NgxSpinnerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatDatepickerModule 
  ],
  providers: [
    SessionGuard,
    TokenService,
    PhkThemeToggleService,
    HttpClient,
    TokenService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: PhkThemeStorageService,
    },
    DatePipe
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
