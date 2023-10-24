import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UnitsComponent } from './views/units/units.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'units',
        pathMatch: 'full'
    },
    {
        path: 'units',
        component: UnitsComponent
    },
    {
        path: '**',
        component: UnitsComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
