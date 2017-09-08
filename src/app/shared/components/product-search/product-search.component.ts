import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductSearchService } from '../../../core/services/product-search/product-search.service'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private productSearchService: ProductSearchService,
    private router: Router
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
         this.statesComplex.push({
           name: res.product_name,
           id: res.id
         }) 
        }
      },
      error => error
    )
  }

  typeaheadOnSelect(event){
    this.router.navigate(['/product/details/', event.item.id])
  }

}
