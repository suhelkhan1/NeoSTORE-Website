import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { CartService } from '../../core/services/cart/cart.service'
import { AuthServiceLocal } from '../../core/services/auth/auth.service'
import { CartServerService } from '../../core/services/cart-server/cart-server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  cartItems: any
  isAuthenticated: boolean = false
  currentUser = JSON.parse(localStorage.getItem('currentAppUserId'))

  constructor(
    private cartService: CartService,
    private authServiceLocal: AuthServiceLocal,
    private cartServerService: CartServerService
  ) {
    this.getCartItems()
  }

  ngOnInit() {
    
    if(this.currentUser !== null){
      this.authServiceLocal.isAuthenticated().subscribe(
        (response) => {
          this.isAuthenticated = response
          this.getCartItems()
        }
      )
    } else{
      this.getCartItems()
    }
  }

  getCartItems(){
    if(this.isAuthenticated){
      this.cartServerService.cartLength(this.currentUser).then(
        (response) => this.cartItems = response
      )
    } else {
      this.cartItems = this.cartService.getCartItems()
    }
  }

}
