/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

/*+-+-+-+-+-+-+-+-+-+-+-+- 3rd Party Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { BsRootModule } from 'ngx-bootstrap'; //Ngx Bootstrap
import { StarRatingModule } from 'angular-star-rating'; //Rating Star Module
import { BreadcrumbModule } from 'angular2-crumbs'; //Angular2 Breadcrumbs
import { InfiniteScrollModule } from 'angular2-infinite-scroll'; //Angular2 Infinite Scroll
import { ShareButtonsModule } from 'ngx-sharebuttons';// Angular socail share buttons

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
    FormsModule,
    BsRootModule,
    StarRatingModule.forRoot(),
    ShareButtonsModule.forRoot(),
    BreadcrumbModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  PageNotFoundComponent,
  SharedComponent,
  EqualValidatorDirective,
  ProductSearchComponent
  ],
  exports:[
    BsRootModule,
    StarRatingModule,
    BreadcrumbModule,
    InfiniteScrollModule,
    ShareButtonsModule,
    EqualValidatorDirective,
    PageNotFoundComponent,
    ProductSearchComponent
  ]
})
export class SharedModule { }
