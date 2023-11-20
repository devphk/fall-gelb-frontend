import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SessionGuard } from './core/guards/guards/session.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        path: 'sign', 
        loadChildren: () => import('./pages/sign/sign.module').then(m => m.SignModule)
    },
    { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    },
    { 
        path: 'fall-gelb', 
        loadChildren: () => import('./pages/fall-gelb/fall-gelb.module').then(m => m.FallGelbModule),
        canActivate: [SessionGuard] 
    },
    { 
        path: 'user-dashboard', 
        loadChildren: () => import('./pages/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
        canActivate: [SessionGuard] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
