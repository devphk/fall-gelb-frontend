import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkThemeToggleComponent } from './phk-theme-toggle.component';
import { PhkThemeToggleService } from './phk-theme-toggle.service';
import { MODE_STORAGE_SERVICE, PhkThemeStorageService } from './phk-theme-storage.service';



@NgModule({
  declarations: [
    PhkThemeToggleComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PhkThemeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: PhkThemeStorageService,
    }
  ],
  exports: [
    PhkThemeToggleComponent
  ]
})
export class PhkThemeToggleModule { }
