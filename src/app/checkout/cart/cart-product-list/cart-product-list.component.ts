import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../core/services/cart/cart.service'
import { CartServerService } from '../../../core/services/cart-server/cart-server.service';
import { AuthServiceLocal } from '../../../core/services/auth/auth.service';
import { CheckoutService } from '../../../core/services/checkout/checkout.service';
import { ICart } from '../../../core/models/cart.model';
import { element } from 'protractor';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css']
})
export class CartProductListComponent implements OnInit {

  cartItems: any[] = []
  errorMesaage: string = ''
  public productQty: number[];

  subTotal: number = 0
  grandTotal: number = 0
  gstRate: number = 5
  taxTotal: number = 0
  isAuthenticate: boolean = false
  currentUser = JSON.parse(localStorage.getItem('currentAppUserId'))

  constructor(
    private cartService: CartService,
    private authServiceLocal: AuthServiceLocal,
    private cartServerService: CartServerService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {
    this.productQty = [1]
  }

  ngOnInit() {
    if(this.currentUser !== null){
      this.authServiceLocal.isAuthenticated().subscribe(
        (response) => {
          this.isAuthenticate = response
          if(this.isAuthenticate){
            this.cartItems = this.cartService.getCartItems()
            if(this.cartItems.length > 0){
              let products = []
              for(let item of this.cartItems){
                products.push({
                  productId: item.id,
                  qty: 1
                })
              }
              let cart = {
                userid: this.currentUser,
                products: products
              }
              this.cartServerService.addToCartServer(cart).subscribe(
                (response) => {                  
                  localStorage.setItem('cartItems', '[]')
                  this.getServerCart()
                }
              )
            } else {
              this.getServerCart()
            }
          } else {
            this.getLocalCart()
          }
        },
        (error) =>{
          this.getLocalCart()
        }
      )
    } else {
      this.getLocalCart()
    }
  }

  /**+*+*+*+*+*+*+*+*+*+***+*+*+* For logged in users +*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*/
  getServerCart(){
    this.cartServerService.getCartServer(this.currentUser).subscribe(
      (response) => {
        this.cartItems = response
        this.getSubtotal()
        this.getGst()
      }
    )
  }

  deleteCartItemServer(cartId){
    this.cartServerService.deleteCart(cartId).subscribe(
      (response) =>{
        this.getServerCart()
        return response
      }
    )
  }

  updateCart(cartItem){
    this.cartServerService.updateCartQty(cartItem).subscribe(
      (response) => {
        this.getServerCart()
      },
      (error) =>{
        this.errorMesaage = error
      }
    )
  }

  updateQtyServer(cartItem, flag){
    if(flag == 'up'){
      cartItem.productqty ++
      this.updateCart(cartItem)
    } else if(flag == 'down'){
      if(cartItem.productqty > 1){
        cartItem.productqty --
        this.updateCart(cartItem)
      }
    }
  }

  /**+*+*+*+*+*+*+*+*+*+***+*+*+* Amount calculation +*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*/  
  getSubtotal(){
    this.subTotal = 0    
    for(let item of this.cartItems){
      this.subTotal = this.subTotal + (item.product_cost*item.productqty)
    }
  }

  getGst(){
    this.taxTotal = 0
    for(let item of this.cartItems){
      let itemCost = item.product_cost * item.productqty
      this.taxTotal =  this.taxTotal + itemCost - ( itemCost - (itemCost * this.gstRate)/100 )
    }
    this.getTotal()
  }

  getTotal(){
    this.grandTotal = this.subTotal + this.taxTotal
  }
  
  /**+*+*+*+*+*+*+*+*+*+***+*+*+* For anonymous users +*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*/
  
  getLocalCart(){
    this.cartItems = this.cartService.getCartItems()
    for(let item of this.cartItems){
      this.productQty.push(1)
    }
    this.subTotalCalc()
    this.calulateTax()
  }

  deleteCartItem(index){
    this.cartService.deleteCartItem(index)
    this.getLocalCart()
    this.subTotalCalc()
    this.calulateTax()
  }

  upQuantity(index:number){
    this.productQty[index] ++
    this.subTotalCalc()
    this.calulateTax()
  }

  downQuantity(index:number){
    if(this.productQty[index] <= 1){
      false
    } else {
      this.productQty[index] --;
      this.subTotalCalc()
      this.calulateTax()
    }
  }

  /**+*+*+*+*+*+*+*+*+*+***+*+*+* Amount calculation +*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*/
  
  subTotalCalc(){
    let i = 0;
    this.subTotal = 0
    for(let item of this.cartItems){
      this.subTotal =  this.subTotal + (item.product_cost * this.productQty[i])
      i++
    }
    this.calculateGrandTotal()
  }

  calulateTax(){
    let i = 0;
    this.taxTotal = 0
    for(let item of this.cartItems){
      let itemCost = item.product_cost * this.productQty[i]
      this.taxTotal =  this.taxTotal + itemCost - ( itemCost - (itemCost * this.gstRate)/100 )
      i++
    }
    this.calculateGrandTotal()
  }

  calculateGrandTotal(){
    this.grandTotal = this.subTotal + this.taxTotal
  }

  goToAddress(data){
    this.checkoutService.addCart(data)
    this.router.navigate(['/checkout/address'])
  }

}
