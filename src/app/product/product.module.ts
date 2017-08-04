import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from  '@angular/router';

import { SharedModule } from '../shared/shared.module'

//3rd party modules imoprts
//Image zoom module
import { ImageZoomModule } from 'angular2-image-zoom';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './product-list/sidebar/sidebar.component';

//Product Services
import { ProductService } from '../core/services/product/product.service'

//Product Routes
import { ProductRoutes as routes} from './product.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageZoomModule,
    SharedModule
  ],
  declarations: [ProductDetailsComponent, ProductComponent, ProductListComponent, SidebarComponent],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
