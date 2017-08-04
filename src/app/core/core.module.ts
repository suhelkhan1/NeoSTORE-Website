import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*+-+-+-+-+-+-+-+-+-+-+-+- SERVICES +-+-+-+-+-+-+-+-+-+-+-+-*/
import { CartService } from './services/cart/cart.service'; //Cart Service
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service'
import { AddressService } from './services/user/address/address.service'
import { ProductCategoryService } from './services/product-category/product-category.service'
import { ProductFilterService } from './services/product-filter/product-filter.service'

/*+-+-+-+-+-+-+-+-+-+-+-+- GUARDS +-+-+-+-+-+-+-+-+-+-+-+-*/
import { AuthGuard } from './guards/auth/auth.guard'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    CartService,
    AuthService,
    UserService,
    AddressService,
    AuthGuard,
    ProductCategoryService,
    ProductFilterService
  ],
  exports: [
  
  ]
})
export class CoreModule { }
