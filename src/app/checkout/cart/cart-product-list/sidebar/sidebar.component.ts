import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 
    if(this.cartItems){
      this.subTotalCalc()
    }
  }

  @Input() cartItems: any[]
  @Input() productQty: number[]


  subTotal: number = 0
  gandTotal: number = 0

  ngOnInit() {
    this.subTotalCalc()
  }

  subTotalCalc(){
    console.log(this.cartItems)
    for(let item of this.cartItems){
      let i = 0; i++
      this.subTotal =  this.subTotal + (item.product_cost * this.productQty[i])
      console.log('SubTotal:', this.subTotal)
    }
  }

}
