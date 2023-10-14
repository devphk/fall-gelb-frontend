import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SessionGuard } from './core/guards/guards/session.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
    },
    { 
        path: 'sign', 
        loadChildren: () => import('./pages/sign/sign.module').then(m => m.SignModule)
    },
    { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        canActivate: [SessionGuard] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
