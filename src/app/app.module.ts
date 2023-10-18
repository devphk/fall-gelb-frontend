import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { SessionGuard } from './core/guards/guards/session.guard';
import { CoreModule } from './core/core.module';
import { TestComponent } from './shared/components/test/test.component';
import { PhkDatePickerModule } from './shared/components/phk-date-picker/phk-date-picker.module';
import { PhkSelectModule } from './shared/components/phk-select/phk-select.module';
import { PhkInputModule } from './shared/components/phk-input/phk-input.module';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    CoreModule,
    PhkDatePickerModule,
    PhkSelectModule,
    PhkInputModule,
  ],
  providers: [SessionGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
