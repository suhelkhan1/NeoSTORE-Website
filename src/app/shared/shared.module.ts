import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

// imports
import { BsRootModule } from 'ngx-bootstrap';
import { SharedComponent } from './shared.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';

import { SharedRoutes as routes } from './shared.routes'
@NgModule({
  imports: [
    CommonModule,
    BsRootModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  PageNotFoundComponent,
  SharedComponent
  ],
  exports:[
    BsRootModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
