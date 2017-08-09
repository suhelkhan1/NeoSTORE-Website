/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

/*+-+-+-+-+-+-+-+-+-+-+-+- 3rd Party Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { BsRootModule } from 'ngx-bootstrap'; //Ngx Bootstrap
import { StarRatingModule } from 'angular-star-rating'; //Rating Star Module
import { BreadcrumbModule } from 'angular2-crumbs'; //Angular2 Breadcrumbs

/*+-+-+-+-+-+-+-+-+-+-+-+- Components +-+-+-+-+-+-+-+-+-+-+-+-*/
import { SharedComponent } from './shared.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { ProductSearchComponent } from './product-search/product-search.component'

/*+-+-+-+-+-+-+-+-+-+-+-+- Directives +-+-+-+-+-+-+-+-+-+-+-+-*/
import { EqualValidatorDirective } from './directives/equal-validator.directive';//Equal validators directive

/*+-+-+-+-+-+-+-+-+-+-+-+- Routes +-+-+-+-+-+-+-+-+-+-+-+-*/
import { SharedRoutes as routes } from './shared.routes';

@NgModule({
  imports: [
    CommonModule,
    BsRootModule,
    RouterModule.forChild(routes),
    StarRatingModule.forRoot(),
    BreadcrumbModule,
    FormsModule
  ],
  declarations: [
  PageNotFoundComponent,
  SharedComponent,
  EqualValidatorDirective,
  ProductSearchComponent
  ],
  exports:[
    BsRootModule,
    PageNotFoundComponent,
    EqualValidatorDirective,
    StarRatingModule,
    BreadcrumbModule,
    ProductSearchComponent
  ]
})
export class SharedModule { }
