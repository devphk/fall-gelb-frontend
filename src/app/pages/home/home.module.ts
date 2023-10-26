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
import { PhkAppsListModule } from '@shared/components/phk-apps-list/phk-apps-list.module';
import { PhkUserAccountPopupModule } from '@shared/components/phk-user-account-popup/phk-user-account-popup.module';
import { PhkThemeToggleModule } from '@shared/components';
import { PhkSearchResultModule } from '@shared/components/phk-search-result/phk-search-result.module';
import { PhkSearcherResultAuxiliaryModule } from '@shared/components/phk-searcher-result-auxiliary/phk-searcher-result-auxiliary.module';

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
    OverlayModule,
    PhkAppsListModule,
    PhkUserAccountPopupModule,
    PhkThemeToggleModule,
    PhkSearchResultModule,
    PhkSearcherResultAuxiliaryModule
  ]
})
export class HomeModule { }
