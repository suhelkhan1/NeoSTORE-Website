import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart/cart.service'

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css']
})
export class CartProductListComponent implements OnInit {

  cartItems = []

  constructor(
    private cartService: CartService
  ) {
    this.cartItems = this.cartService.getCartItems()
  }

  ngOnInit() {
    this.getCartItems()
  }

  getCartItems(){
    this.cartItems = this.cartService.getCartItems()
  }

  deleteCartItem(index){
    this.cartService.deleteCartItem(index)
    this.getCartItems()
  }

}
