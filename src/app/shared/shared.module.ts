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
import { ToastModule, ToastOptions } from 'ng2-toastr'; // Angular Toaster
import { AgmCoreModule } from '@agm/core'; //Angular 2 Google Maps

/*+-+-+-+-+-+-+-+-+-+-+-+- Components +-+-+-+-+-+-+-+-+-+-+-+-*/
import { SharedComponent } from './shared.component';
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component';
import { ProductSearchComponent } from './components/product-search/product-search.component'
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { LocationComponent } from './components/location/location.component';

/*+-+-+-+-+-+-+-+-+-+-+-+- Services +-+-+-+-+-+-+-+-+-+-+-+-*/
import { ToastrService } from './services/toastr/toastr.service';

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
    //BreadcrumbModule.forRoot(),
    InfiniteScrollModule,
    RouterModule.forChild(routes),
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIc9JPEx_28T-43HG6bK-CtB7Z2KmaY9o'
    })
  ],
  declarations: [
    PageNotFoundComponent,
    SharedComponent,
    EqualValidatorDirective,
    ProductSearchComponent,
    ThankyouComponent,
    LocationComponent
  ],
  providers:[
    { provide: ToastOptions, useClass: ToastrService },
  ],
  exports:[
    BsRootModule,
    StarRatingModule,
    //BreadcrumbModule,
    InfiniteScrollModule,
    ShareButtonsModule,
    EqualValidatorDirective,
    PageNotFoundComponent,
    ProductSearchComponent,
    ToastModule,
    AgmCoreModule
  ]
})
export class SharedModule { }
