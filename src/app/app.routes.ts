import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/error-pages/page-not-found/page-not-found.component'


export const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
      path: 'product',
      loadChildren: './product/product.module#ProductModule'
    },
    {
      path: 'checkout',
      loadChildren: './checkout/checkout.module#CheckoutModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'commons',
        loadChildren: './shared/shared.module#SharedModule'
    },
    {
        path: '',
        loadChildren: './information/information.module#InformationModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
    /*{ path: 'path2', component: Name2Component },
    { path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component },
    { path: '**', component: PageNotFoundComponent },*/

    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
