import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomsComponent } from './views/customs/customs.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'customs',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: CustomsComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
