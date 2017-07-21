import { Routes, RouterModule } from '@angular/router';


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
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'commons',
        loadChildren: './shared/shared.module#SharedModule'
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
