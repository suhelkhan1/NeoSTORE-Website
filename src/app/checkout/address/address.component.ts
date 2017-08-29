import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddressService } from '../../core/services/user/address/address.service'
import { IAddress } from '../../core/models/address.model'

import { AuthServiceLocal } from '../../core/services/auth/auth.service';
import { CartServerService } from '../../core/services/cart-server/cart-server.service';
import { CartService } from '../../core/services/cart/cart.service';
import { CheckoutService } from '../../core/services/checkout/checkout.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(
    private addressService: AddressService,
    private authServiceLocal: AuthServiceLocal,
    private cartServerService: CartServerService,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  addresses: IAddress
  isAuthenticate: boolean = false
  cartItems: any[] =[]
  currentUser = JSON.parse(localStorage.getItem('currentAppUserId'))
  selectedAddress: any[] = []

  ngOnInit() {
    
    if(this.currentUser !== null){
      this.authServiceLocal.isAuthenticated().subscribe(
        (response) => {
          this.isAuthenticate = response
          this.getAddress()
          this.checkCart()
        }
      )
    }
  }

  getAddress(){
    this.addressService.getAllAddresses().subscribe(
      (response: IAddress) => {
        this.addresses = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  checkCart(){
    /*if(this.isAuthenticate){
      this.cartServerService.getCartServer(this.currentUser).subscribe(
        (response) => {
          this.cartItems = response
          if(!this.cartItems.length){
            this.router.navigate(['/checkout/cart'])
          }
        }
      )
    } else {
      this.cartItems = this.cartService.getCartItems()
      if(!this.cartItems.length){
        this.router.navigate(['/checkout/cart'])
      }
    }*/
    let data = this.checkoutService.getData()
    if(!Object.keys(data).length){
      this.router.navigate(['/checkout/cart'])      
    }
  }

  selectAddress(address) {
    this.selectedAddress.push(address)
  }

  goToPayment(){
    this.checkoutService.addAddress(this.selectedAddress)
      this.router.navigate(['/checkout/payment'])
  }


}
