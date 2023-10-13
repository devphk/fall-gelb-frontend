import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard', 
                loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) 
            },
            {
                path: 'entities', 
                loadChildren: () => import('./features/entities/entities.module').then(m => m.EntitiesModule) 
            },
            {
                path: 'operations', 
                loadChildren: () => import('./features/operations/operations.module').then(m => m.OperationsModule) 
            },
            {
                path: 'statistics', 
                loadChildren: () => import('./features/statistics/statistics.module').then(m => m.StatisticsModule) 
            },
            {
                path: 'administration', 
                loadChildren: () => import('./features/administration/administration.module').then(m => m.AdministrationModule) 
            },
            {
                path: 'settings', 
                loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) 
            },
            {
                path: 'commercial', 
                loadChildren: () => import('./features/commercial/commercial.module').then(m => m.CommercialModule) 
            },
            {
                path: 'comptroller', 
                loadChildren: () => import('./features/comptroller/comptroller.module').then(m => m.ComptrollerModule) 
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
