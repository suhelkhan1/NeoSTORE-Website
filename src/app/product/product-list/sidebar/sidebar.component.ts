import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductCategoryService } from '../../../core/services/product-category/product-category.service'
import { IProductCategory } from '../../../core/models/product-category.model'

import { ProductFilterService } from '../../../core/services/product-filter/product-filter.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private productCategoryService: ProductCategoryService,
    private productFilterService:ProductFilterService 
  ) { }

  productCategories: IProductCategory
  @Output() products: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit() {
    this.getProductCategories()
  }

  getProductCategories() {
    this.productCategoryService.getProductCategories().subscribe(
      (response) => {
        this.productCategories = response
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  getProductByCategory(categoryId){
    this.productFilterService.getProductCategories(categoryId).subscribe(
      response => this.products.emit(response),
      error => error
    )
  }
}
