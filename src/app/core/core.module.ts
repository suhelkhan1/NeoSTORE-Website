import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*+-+-+-+-+-+-+-+-+-+-+-+- SERVICES +-+-+-+-+-+-+-+-+-+-+-+-*/
import { CartService } from './services/cart/cart.service'; //Cart Service
import { AuthService } from './services/auth/auth.service';

/*+-+-+-+-+-+-+-+-+-+-+-+- DIRECTIVES +-+-+-+-+-+-+-+-+-+-+-+-*/
import { EqualValidatorDirective } from './directives/equal-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EqualValidatorDirective
  ],
  providers: [
    CartService,
    AuthService
  ],
  exports: [
    EqualValidatorDirective
  ]
})
export class CoreModule { }
