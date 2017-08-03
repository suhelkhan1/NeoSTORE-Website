import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

// imports 3rd party modules
//Angular boostrap
import { BsRootModule } from 'ngx-bootstrap';
//Rating Star Module
import { StarRatingModule } from 'angular-star-rating'

import { SharedComponent } from './shared.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';

import { EqualValidatorDirective } from './directives/equal-validator.directive'

import { SharedRoutes as routes } from './shared.routes'
@NgModule({
  imports: [
    CommonModule,
    BsRootModule,
    RouterModule.forChild(routes),
    StarRatingModule.forRoot()
  ],
  declarations: [
  PageNotFoundComponent,
  SharedComponent,
  EqualValidatorDirective
  ],
  exports:[
    BsRootModule,
    PageNotFoundComponent,
    EqualValidatorDirective,
    StarRatingModule
  ]
})
export class SharedModule { }
