import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { GuaranteeReturnPolicyComponent } from './guarantee-return-policy/guarantee-return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'guarantee-return-policy', component: GuaranteeReturnPolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
