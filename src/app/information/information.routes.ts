import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { GuaranteeReturnPolicyComponent } from './guarantee-return-policy/guarantee-return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LocateUsComponent } from './locate-us/locate-us.component';

export const infoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'contact-us', pathMatch: 'prefix'}, 
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'guarantee-return-policy', component: GuaranteeReturnPolicyComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'locate-us', component: LocateUsComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(infoRoutes)
  ], 
  exports: [
    RouterModule
  ]
})

export class InfomationRoutingModules {}
