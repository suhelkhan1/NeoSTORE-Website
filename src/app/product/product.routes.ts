import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component'
import { ProductDetailsComponent } from  './product-details/product-details.component'
import { ProductListComponent} from './product-list/product-list.component'


export const ProductRoutes: Routes =[
  {
    path:'',
    component: ProductComponent,
    children: [
      { path:'', redirectTo: 'list', pathMatch:'prefix'},
      { path:'details/:id', component:ProductDetailsComponent, data: { breadcrumb: 'Product Details'} },
      { path:'list', component:ProductListComponent, data: { breadcrumb: 'Product List'} }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule {}

