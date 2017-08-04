import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { CartComponent } from './cart.component';
import { SidebarComponent } from './cart-product-list/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CartProductListComponent, CartComponent, SidebarComponent]
})
export class CartModule { }
