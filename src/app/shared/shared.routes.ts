import { SharedComponent } from './shared.component'
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component'

export const SharedRoutes = [
  { path: '404', component: PageNotFoundComponent },
  /*{ path: '**', redirectTo: '404', pathMatch:'full'}*/
]; 