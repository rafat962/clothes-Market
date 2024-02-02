import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { GiftsComponent } from './Gifts/Gifts.component';
import { BrandsComponent } from './Brands/Brands.component';
import { ProductComponent } from './product/product.component';
import { Shop_moreComponent } from './men/shop_more/shop_more.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout/checkout.component';
import { Product_adminComponent } from './admin/products_admin/product_admin/product_admin.component';
import { Cart_adminComponent } from './admin/cart_admin/cart_admin/cart_admin.component';
import { Admin_headComponent } from './admin/admin_head/admin_head.component';
import { Add_productComponent } from './admin/products_admin/product_admin/add_product/add_product.component';
import { UpdateComponent } from './admin/products_admin/product_admin/update/update.component';
import { Cart_viewComponent } from './admin/cart_admin/cart_view/cart_view.component';
import { AuthComponent } from './Auth/Auth.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'admin/admin',component:Admin_headComponent,children:[
    {path:'',component:AuthComponent},
    {path:'products',component:Product_adminComponent,children:[
      {path:'add',component:Add_productComponent},
      {path:'update/:id',component:UpdateComponent},
    ]},
    {path:'carts',component:Cart_adminComponent,children:[
      {path:':id',component:Cart_viewComponent}
    ]},
  ]},
  { path: 'cart', component: CartComponent},
  {path:'check',component:CheckoutComponent},
  {path:'men',component:MenComponent},
  {path:'men/shop_more',component:Shop_moreComponent},
  {path:'women',component:WomenComponent},
  {path:':id',component:ProductComponent},
  {path:'gifts',component:GiftsComponent},
  {path:'brands',component:BrandsComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
