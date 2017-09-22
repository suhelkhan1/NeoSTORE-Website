import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { InfomationRoutingModules } from './information.routes';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { GuaranteeReturnPolicyComponent } from './guarantee-return-policy/guarantee-return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LocateUsComponent } from './locate-us/locate-us.component';

@NgModule({
  imports: [
    CommonModule,
    InfomationRoutingModules,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactUsComponent,
    TermsConditionsComponent,
    GuaranteeReturnPolicyComponent,
    PrivacyPolicyComponent,
    LocateUsComponent
  ],
  exports:[
    ContactUsComponent,
    TermsConditionsComponent,
    GuaranteeReturnPolicyComponent,
    PrivacyPolicyComponent
  ]
})
export class InformationModule { }
