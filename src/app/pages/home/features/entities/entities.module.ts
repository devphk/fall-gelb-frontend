import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { ReactiveFormsModule } from '@angular/forms';

import { PhkDatePickerModule } from 'src/app/shared/components/phk-date-picker/phk-date-picker.module';
import { PhkInputModule } from 'src/app/shared/components/phk-input/phk-input.module';
import { PhkTextAreaModule } from 'src/app/shared/components/phk-text-area/phk-text-area.module';
import { PhkSelectModule } from 'src/app/shared/components/phk-select/phk-select.module';
import { PhkSlideToggleModule } from 'src/app/shared/components/phk-slide-toggle/phk-slide-toggle.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewShippingcompanyComponent } from './components/new-shippingcompany/new-shippingcompany.component';
import { NewConsolidatorComponent } from './components/new-consolidator/new-consolidator.component';
import { NewAirlineComponent } from './components/new-airline/new-airline.component';
import { NewGroundtransportComponent } from './components/new-groundtransport/new-groundtransport.component';
import { NewDriverComponent } from './components/new-driver/new-driver.component';



const routes: Routes = [
  {
    path: '',
    component: EntitiesComponent
  }
];

@NgModule({
  declarations: [
    EntitiesComponent,
    NewCustomerComponent,
    NewProviderComponent,
    NewShippingcompanyComponent,
    NewConsolidatorComponent,
    NewAirlineComponent,
    NewGroundtransportComponent,
    NewDriverComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    PhkDatePickerModule,
    PhkInputModule,
    PhkSlideToggleModule,
    PhkSelectModule,
    PhkTextAreaModule,
    ReactiveFormsModule
  ],
  providers: [
    ModalService
  ]
})
export class EntitiesModule { }
