import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductCategoryService } from '../../../core/services/product-category/product-category.service'
import { IProductCategory } from '../../../core/models/product-category.model'

import { ProductFilterService } from '../../../core/services/product-filter/product-filter.service'

import { ColorService } from '../../../core/services/color/color.service'
import { IColor } from '../../../core/models/color.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private productCategoryService: ProductCategoryService,
    private productFilterService:ProductFilterService,
    private colorService: ColorService 
  ) { }

  productCategories: IProductCategory
  colors: IColor

 /* @Output() products: EventEmitter<any> = new EventEmitter<any>()
  @Output() title: EventEmitter<any> = new EventEmitter<any>()*/
  @Output() categoryFilter: EventEmitter<any> = new EventEmitter<any>()
  @Output() colorFilter: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit() {
    this.getProductCategories()
    this.getColors()
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

  getProductByCategory(id, category_name){
    this.productFilterService.getProductCategories(id).subscribe(
      (response) => {
         let results = {
          title : category_name,
          products: response
        }
        this.categoryFilter.emit(results)
      },
      error => error
    )
  }

  getProductcByColor(colorName){
    this.productFilterService.getProductsByColor(colorName).subscribe(
      response => this.colorFilter.emit(response),
      error => error
    )
  }

  getColors(){
    this.colorService.getColors().subscribe(
      response => this.colors = response,
      error => error
    )
  }
}
