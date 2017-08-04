import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  @Input() cartItems: any[]
  @Input() productQty


  subTotal: number = 0
  gandTotal: number = 0

  ngOnInit() {
    this.subTotalCalc()
  }

  subTotalCalc(){
    console.log(this.cartItems)
    for(let item of this.cartItems){
      this.subTotal =  this.subTotal + (item.product_cost * this.productQty)
      console.log('SubTotal:', this.subTotal)
    }
  }

}
