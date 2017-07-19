import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from  '@angular/router'



import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { ProductRoutes as routes} from './product.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ImageZoomModule} from 'angular2-image-zoom';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageZoomModule
  ],
  declarations: [ProductDetailsComponent, ProductComponent, ProductListComponent, SidebarComponent],
  providers:[

  ]
})
export class ProductModule { }
