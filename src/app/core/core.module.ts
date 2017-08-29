/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*+-+-+-+-+-+-+-+-+-+-+-+- SERVICES +-+-+-+-+-+-+-+-+-+-+-+-*/
import { CartService } from './services/cart/cart.service'; //Cart Service
import { AuthServiceLocal } from './services/auth/auth.service';
import { UserService } from './services/user/user.service'
import { AddressService } from './services/user/address/address.service'
import { ProductCategoryService } from './services/product-category/product-category.service'
import { ProductFilterService } from './services/product-filter/product-filter.service'
import { ProductSortService } from './services/product-sort/product-sort.service'
import { ColorService } from './services/color/color.service'
import { ProductSearchService } from './services/product-search/product-search.service'
import { ProductService } from './services/product/product.service'
import { RatingService } from './services/rating/rating.service'
import { CartServerService } from './services/cart-server/cart-server.service'
import { CheckoutService } from './services/checkout/checkout.service';

/*+-+-+-+-+-+-+-+-+-+-+-+- GUARDS +-+-+-+-+-+-+-+-+-+-+-+-*/
import { AuthGuard } from './guards/auth/auth.guard'

/**
 * The Core Module 
 * This module includes all the services, gaurds, models and directives  
 * which are used across the entire app.
 */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    CartService,
    AuthServiceLocal,
    UserService,
    AddressService,
    AuthGuard,
    ProductCategoryService,
    ProductFilterService,
    ProductSortService,
    ColorService,
    ProductSearchService,
    ProductService,
    RatingService,
    CartServerService, CheckoutService
  ],
  exports: [
  
  ]
})
export class CoreModule { }
