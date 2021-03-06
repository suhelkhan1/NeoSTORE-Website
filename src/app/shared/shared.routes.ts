import { SharedComponent } from './shared.component'
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component'
import { ThankyouComponent } from './components/thankyou/thankyou.component';

export const SharedRoutes = [
  { path: '404', component: PageNotFoundComponent },
  { path: 'thankyou', component: ThankyouComponent }
  /*{ path: '**', redirectTo: '404', pathMatch:'full'}*/
]; 