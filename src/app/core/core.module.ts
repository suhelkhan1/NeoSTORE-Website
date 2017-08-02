import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*+-+-+-+-+-+-+-+-+-+-+-+- SERVICES +-+-+-+-+-+-+-+-+-+-+-+-*/
import { CartService } from './services/cart/cart.service'; //Cart Service
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service'

/*+-+-+-+-+-+-+-+-+-+-+-+- GUARDS +-+-+-+-+-+-+-+-+-+-+-+-*/
import { AuthGuard } from './guards/auth/auth.guard'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    CartService,
    AuthService,
    UserService,
    AuthGuard
  ],
  exports: [
  
  ]
})
export class CoreModule { }
