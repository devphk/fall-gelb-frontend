import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhkSearchResultComponent } from './phk-search-result.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PhkSearchResultComponent
  ],
  exports:[
    PhkSearchResultComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PhkSearchResultModule { }
