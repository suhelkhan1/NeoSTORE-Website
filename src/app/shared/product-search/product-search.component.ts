import { Component, OnInit } from '@angular/core';

import { ProductSearchService } from '../../core/services/product-search/product-search.service'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private productSearchService: ProductSearchService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  public groupSelected:string;
  public statesComplex:any[] = []

  getProducts() {
    this.productSearchService.getProducts().subscribe(
      (response) => {
        //this.statesComplex = JSON.stringify(response)
        for(let res of response) {
         this.statesComplex.push(res.product_name) 
        }
        console.log(this.statesComplex)
      },
      error => error
    )
  }

 /* 'Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
*/

}
