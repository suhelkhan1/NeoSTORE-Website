import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart/cart.service'

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css']
})
export class CartProductListComponent implements OnInit {

  cartItems
  public productQty: number[];

  subTotal: number = 0
  gandTotal: number = 0

  constructor(
    private cartService: CartService
  ) {
    this.productQty = [1]
    //this.productQty = this.productQty.map((el:any)=>0);
    //this.cartItems = this.cartService.getCartItems()
  }

  ngOnInit() {
    this.getCartItems()
    this.subTotalCalc()
  }

  getCartItems(){
    this.cartItems = this.cartService.getCartItems()
    for(let item of this.cartItems){
      this.productQty.push(1)
    }
  }

  deleteCartItem(index){
    this.cartService.deleteCartItem(index)
    this.getCartItems()
  }

  upQuantity(index:number){
    this.productQty[index] ++
    this.subTotalCalc()
  }

  downQuantity(index:number){
    if(this.productQty[index] <= 1){
      false
    } else {
      this.productQty[index] --;
      this.subTotalCalc
    }
  }

  subTotalCalc(){
    let i = 0;
    for(let item of this.cartItems){
      this.subTotal =  this.subTotal + (item.product_cost * this.productQty[i])
      console.log('SubTotal:', this.subTotal)
      i++
    }
  }

}
