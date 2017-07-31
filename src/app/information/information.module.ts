import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information.routes';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { GuaranteeReturnPolicyComponent } from './guarantee-return-policy/guarantee-return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule
  ],
  declarations: [
    ContactUsComponent,
    TermsConditionsComponent,
    GuaranteeReturnPolicyComponent,
    PrivacyPolicyComponent
  ],
  exports:[
    ContactUsComponent,
    TermsConditionsComponent,
    GuaranteeReturnPolicyComponent,
    PrivacyPolicyComponent
  ]
})
export class InformationModule { }
