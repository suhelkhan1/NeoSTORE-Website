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
  grandTotal: number = 0
  gstRate: number = 5
  taxTotal: number = 0

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
    this.calulateTax()
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

}
