/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from  '@angular/router';

/*+-+-+-+-+-+-+-+-+-+-+-+- 3rd party  Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { ImageZoomModule } from 'angular2-image-zoom'; //Image zoom module

/*+-+-+-+-+-+-+-+-+-+-+-+- Shared Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { SharedModule } from '../shared/shared.module'

/*+-+-+-+-+-+-+-+-+-+-+-+- Product Components +-+-+-+-+-+-+-+-+-+-+-+-*/
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './product-list/sidebar/sidebar.component';

/*+-+-+-+-+-+-+-+-+-+-+-+- Product Routes +-+-+-+-+-+-+-+-+-+-+-+-*/
import { ProductRoutes as routes} from './product.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageZoomModule,
    SharedModule
  ],
  declarations: [
    ProductDetailsComponent, 
    ProductComponent, 
    ProductListComponent, 
    SidebarComponent
  ],
  providers:[
  ]
})
export class ProductModule { }
