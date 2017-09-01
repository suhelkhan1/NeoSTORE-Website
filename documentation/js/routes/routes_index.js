var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"AppRoutes","filename":"src/app/app.routes.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./home/home.module#HomeModule","data":{"breadcrumb":"Home"}},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","data":{"breadcrumb":"Auth"}},{"path":"product","loadChildren":"./product/product.module#ProductModule","data":{"breadcrumb":"Products"}},{"path":"checkout","loadChildren":"./checkout/checkout.module#CheckoutModule","data":{"breadcrumb":"Checkout"}},{"path":"user","loadChildren":"./user/user.module#UserModule","canActivate":["AuthGuard"],"data":{"breadcrumb":"User"},"children":[{"kind":"module","children":[{"name":"UserRoutes","filename":"src/app/user/user.routes.ts","module":"UserRoutingModules","children":[{"path":"","component":"UserComponent","children":[{"path":"","redirectTo":"profile","pathMatch":"prefix"},{"path":"profile","component":"ProfileComponent"},{"path":"orders","component":"OrdersComponent"},{"path":"addresses","component":"AddressesComponent"},{"path":"add/address","component":"AddAddressComponent"},{"path":"edit/address/:id","component":"EditAddressComponent"},{"path":"edit/profile","component":"EditProfileComponent"}]}],"kind":"module"}],"module":"UserModule"}]},{"path":"commons","loadChildren":"./shared/shared.module#SharedModule","data":{"breadcrumb":"Shared"}},{"path":"info","loadChildren":"./information/information.module#InformationModule","data":{"breadcrumb":"Info"}},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"},{"name":"HomeRoutes","filename":"src/app/home/home.routes.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"},{"name":"infoRoutes","filename":"src/app/information/information.routes.ts","module":"InfomationRoutingModules","children":[{"path":"","children":[{"path":"","redirectTo":"contact-us","pathMatch":"prefix"},{"path":"contact-us","component":"ContactUsComponent"},{"path":"terms-conditions","component":"TermsConditionsComponent"},{"path":"guarantee-return-policy","component":"GuaranteeReturnPolicyComponent"},{"path":"privacy-policy","component":"PrivacyPolicyComponent"}]}],"kind":"module"},{"name":"ProductRoutes","filename":"src/app/product/product.routes.ts","module":"ProductRoutingModule","children":[{"path":"","component":"ProductComponent","children":[{"path":"","redirectTo":"list","pathMatch":"prefix"},{"path":"details/:id","component":"ProductDetailsComponent","data":{"breadcrumb":"ProductDetails"}},{"path":"list","component":"ProductListComponent","data":{"breadcrumb":"ProductList"}}]}],"kind":"module"}]}