import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoodsTypeComponent } from './goods-type/goods-type.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'goods-type',
        pathMatch: 'full'
    },
    {
        path: 'goodstype',
        component: GoodsTypeComponent
    },
    {
        path: '**',
        component: GoodsTypeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
