import { ProductComponent } from './product.component'
import { ProductDetailsComponent } from  './product-details/product-details.component'
import { ProductListComponent} from './product-list/product-list.component'


export const ProductRoutes =[
  {
    path:'',
    component: ProductComponent,
    children: [
      { path:'', redirectTo: 'list', pathMatch:'full'},
      { path:'details/:id', component:ProductDetailsComponent, data: { breadcrumb: 'Product Details'} },
      { path:'list', component:ProductListComponent, data: { breadcrumb: 'Product List'} }
    ]
  }
]
