import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, ToastService } from './services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestsResponseInterceptor } from './interceptors/http-request-response.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    DialogService,
    ToastService,
    MatDialog,
    HttpService,
    HttpClientModule,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestsResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  exports: [
    FlexLayoutModule,
    MatDialogModule
  ]
})
export class CoreModule { }
