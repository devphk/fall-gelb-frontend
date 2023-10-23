import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WarehouseComponent } from './warehouse/warehouse.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'warehouse',
        pathMatch: 'full'
    },
    {
        path: 'warehouse',
        component: WarehouseComponent
    },
    {
        path: '**',
        component: WarehouseComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
