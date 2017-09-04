import { Component, OnInit} from '@angular/core'
import { OrderService } from '../../../core/services/order/order.service';
import { PdfGenerateService } from '../../../core/services/pdf/pdf-generate.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = []

  constructor(
    private orderService: OrderService,
    private pdfGenerateService: PdfGenerateService
  ) { }
  
  ngOnInit() {
    this.getOrders()
  }

  getOrders(){
    this.orderService.getOrders().subscribe(
      (response) => {
        //this.orders = response
        for(let res of response){
          res.order.createon = new Date(res.order.createon).toDateString()
          this.orders.push(res)
          console.log(this.orders)
        }
      }
    )
  }

  downloadPdf(order){
    this.pdfGenerateService.generatePdf(order)
  }

}
