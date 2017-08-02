import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { CartService } from '../../core/services/cart/cart.service'
import { AuthService } from '../../core/services/auth/auth.service'

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
    private authSerive: AuthService
  ) { 
    this.cartItems = this.cartService.getCartItems()
    this.isAuthenticated = this.authSerive.isAuthenticated()
  }

  ngOnInit() {
    this.getCartItems()
    this.isAuthenticated = this.authSerive.isAuthenticated()
  }

  getCartItems(){
    this.cartItems = this.cartService.getCartItems()
  }

}
