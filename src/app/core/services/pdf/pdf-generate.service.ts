import { Injectable } from '@angular/core';
import * as jsPdf from 'jspdf'

@Injectable()
export class PdfGenerateService {

  constructor() { }


  generatePdf(data){
    let doc = new jsPdf();

    doc.setTextColor(100)
    doc.text(20, 20, 'NeoSTORE')

    doc.setTextColor(150)
    doc.setFontSize(10)
    doc.text(55, 20, 'contact us: 1800 000 0000 || info@neostore.com')
    doc.line(20, 25, 180, 25) // horizontal line

    doc.setFontSize(13)
    doc.text(20, 40, 'Order ID: '+ data.order.id )
    doc.text(20, 50, 'Order Date: ' + data.order.createon)

    doc.text(20, 60, 'Shipping Address:')
    doc.text(20, 65, '' + data.order.address.fulladdress)    
    doc.text(20, 70, '' + data.order.address.pincode)
    doc.text(20, 75, '' + data.order.address.city)
    
    doc.line(20, 80, 180, 80) // horizontal line
    doc.setFontStyle('bold')
    doc.text(22, 87, 'Product')
    doc.text(130, 87, 'Qty')
    doc.text(148, 87, 'Price')
    doc.text(168, 87, 'Total')
    doc.line(20, 90, 180, 90) // horizontal line

    
    doc.setFontStyle('null')
    let i = 97
    let grandTotal = 0 
    for(let p of data.products){
      doc.text(22, i, '' + p.product_name)
      doc.text(130, i, '' + p.productqty)
      doc.text(148, i, '' + p.product_cost)
      doc.text(168, i, '' + p.productqty*p.product_cost)
      i=i+10;
      grandTotal = grandTotal + (p.productqty*p.product_cost)
    }
    doc.line(20, i + 20, 180, i + 20) // horizontal line
    doc.text(130, i + 28, 'Grant Total:')
    doc.setFontStyle('bold')
    doc.text(160, i + 28, '' + grandTotal)
    doc.line(20, i + 35, 180, i + 35) // horizontal line

    doc.save('test.pdf')
  }
}
