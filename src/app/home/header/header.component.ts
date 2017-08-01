import { Component, OnInit } from '@angular/core';

import { CartService } from '../../core/services/cart/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems: any

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

}
