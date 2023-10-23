import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TruckTypeComponent } from './views/truck-type/truck-type.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'truck-type',
        pathMatch: 'full'
    },
    {
        path: 'truck-type',
        component: TruckTypeComponent
    },
    {
        path: '**',
        component: TruckTypeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
