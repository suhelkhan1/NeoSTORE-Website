import { ProductComponent } from './product.component'
import { ProductDetailsComponent } from  './product-details/product-details.component'
import { ProductListComponent} from './product-list/product-list.component'

export const ProductRoutes =[
  {
    path:'',
    component: ProductComponent,
    children: [
      { path:'details', component:ProductDetailsComponent},
      { path:'list', component:ProductListComponent}
    ]
  }
]
