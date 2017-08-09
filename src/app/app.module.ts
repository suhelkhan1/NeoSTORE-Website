/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*+-+-+-+-+-+-+-+-+-+-+-+- App Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module'
import { ProductModule } from './product/product.module'
import { CheckoutModule }from './checkout/checkout.module'
import { InformationModule }from './information/information.module'

/*+-+-+-+-+-+-+-+-+-+-+-+- App components +-+-+-+-+-+-+-+-+-+-+-+-*/
import { AppComponent } from './app.component';

/*+-+-+-+-+-+-+-+-+-+-+-+- App routes +-+-+-+-+-+-+-+-+-+-+-+-*/
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    SharedModule,
    HomeModule,
    AuthModule,
    CoreModule,
    ProductModule,
    CheckoutModule,
    InformationModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
