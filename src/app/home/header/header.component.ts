import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { CartService } from '../../core/services/cart/cart.service'
import { AuthServiceLocal } from '../../core/services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  cartItems: any
  isAuthenticated

  constructor(
    private cartService: CartService,
    private authServiceLocal: AuthServiceLocal
  ) {
    this.cartItems = this.cartService.getCartItems()
  }

  ngOnInit() {
    this.getCartItems()
    this.authServiceLocal.isAuthenticated().subscribe(
      response => this.isAuthenticated = response
    )
  }

  getCartItems(){
    this.cartItems = this.cartService.getCartItems()
  }

}
