import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CartProductListComponent, 
    CartComponent
  ]
})
export class CartModule { }
