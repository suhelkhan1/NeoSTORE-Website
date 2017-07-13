import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports
import { BsRootModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsRootModule
  ],
  exports:[
    BsRootModule
  ],
  declarations: [

  ]
})
export class SharedModule { }
