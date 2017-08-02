import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/error-pages/page-not-found/page-not-found.component'
import { AuthGuard } from './core/guards/auth/auth.guard'

export const routes: Routes = [
    {
        path: 'home',
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
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'commons',
        loadChildren: './shared/shared.module#SharedModule'
    },
    {
        path: 'info',
        loadChildren: './information/information.module#InformationModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
