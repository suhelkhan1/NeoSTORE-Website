import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


//Customs Module
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';

//Main App route 
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HomeModule,
    AuthModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
