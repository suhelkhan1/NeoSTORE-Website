import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activatedLink
  currentUrl: string
  currentStep: string
  checkoutUrls = ['/checkout/cart', '/checkout/address', '/checkout/payment']
  
  constructor(
    private router: Router,
  ){
    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      this.currentUrl = e.url;
      this.findCurrentStep(this.currentUrl);      
      //window.scrollTo(0, 0);
    });
  }

  ngOnInit(){

  }

  isCheckoutRoute(){
    if(!this.currentUrl){
      return false
    }
    const index = this.checkoutUrls.indexOf(this.currentUrl);
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

}



