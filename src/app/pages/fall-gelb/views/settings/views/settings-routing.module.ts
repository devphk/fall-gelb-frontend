import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoodsTypeComponent } from './goods-type/goods-type.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'goods-type',
    pathMatch: 'full',
  },
  {
    path: 'goodstype',
    component: GoodsTypeComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
  },
  {
    path: '**',
    component: WarehouseComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
