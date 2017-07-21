import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { CartComponent } from './cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartProductListComponent, CartComponent, SidebarComponent]
})
export class CartModule { }
