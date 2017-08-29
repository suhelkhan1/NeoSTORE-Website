/*+-+-+-+-+-+-+-+-+-+-+-+- Angular Modules +-+-+-+-+-+-+-+-+-+-+-+-*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AppRoutingModule } from './app.routes';

/**
 * The app module
 * 
 * The bootstrapper module for entire application {@link AppModule}
 */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
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
