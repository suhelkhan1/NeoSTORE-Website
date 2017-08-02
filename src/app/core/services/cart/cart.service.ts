import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProduct } from '../../models/product.model';

@Injectable()
export class CartService {


  constructor() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  cartItems = [] ;

  addToCart(product): any{
    this.cartItems.push(product)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    console.log('Product inserted:', product.product_name)
    return this.cartItems
  }

  getCartItems(): any {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    return this.cartItems
  }

  deleteCartItem(index): any{
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    this.cartItems.splice(index,1)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    return this.cartItems
  }

}
