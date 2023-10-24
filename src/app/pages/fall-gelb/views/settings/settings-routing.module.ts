import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerTypeComponent } from './views/container-type/container-type.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'container-type',
        pathMatch: 'full'
    },
    {
        path: 'container-type',
        component: ContainerTypeComponent
    },
    {
        path: '**',
        component: ContainerTypeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
