import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { PhkAppsListComponent } from './components/phk-apps-list/phk-apps-list.component';
import { PhkUserAccountHeaderComponent } from './components/phk-user-account-header/phk-user-account-header.component';
import { PhkConfirmationDialogComponent } from './components/phk-confirmation-dialog/phk-confirmation-dialog.component';



@NgModule({
  declarations: [
    AppsListComponent,
    PhkAppsListComponent,
    PhkUserAccountHeaderComponent,
    PhkConfirmationDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
