import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { PhkAppsListComponent } from './components/phk-apps-list/phk-apps-list.component';



@NgModule({
  declarations: [
    AppsListComponent,
    PhkAppsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
