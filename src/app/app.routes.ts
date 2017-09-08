import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/error-pages/page-not-found/page-not-found.component'
import { AuthGuard } from './core/guards/auth/auth.guard'
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: { breadcrumb: 'Home'}
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        data: { breadcrumb: 'Auth'}
    },
    {
        path: 'product',
        loadChildren: './product/product.module#ProductModule',
        data: { breadcrumb: 'Products'}
    },
    {
        path: 'checkout',
        loadChildren: './checkout/checkout.module#CheckoutModule',
        data: { breadcrumb: 'Checkout'}
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard],
        data: { breadcrumb: 'User'}
    },
    {
        path: 'commons',
        loadChildren: './shared/shared.module#SharedModule',
        data: { breadcrumb: 'Shared'}                
    },
    {
        path: 'info',
        loadChildren: './information/information.module#InformationModule',
        data: { breadcrumb: 'Info'}
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

