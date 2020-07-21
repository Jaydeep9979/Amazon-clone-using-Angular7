import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductchildComponent } from './productchild/productchild.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyinfoComponent } from './myinfo/myinfo.component';

const routes: Routes = [
                        {path: '',component: HomeComponent},
                        {path: 'home',component: HomeComponent},
                        {path: 'product_list/:id',component: ProductlistComponent},
                        {path: 'product_list/:id1/:id2',component: ProductlistComponent},
                        {path: 'product_info/:id',component: ProductInfoComponent},
                        {path: 'cart_list',component: CartComponent},
                        {path: 'checkout',component:CheckoutComponent},
                        {path: 'contactUs',component:ContactusComponent},
                        {path: 'aboutUs',component:AboutusComponent},
                        {path: 'myinfo/:name',component:MyinfoComponent}];
                        



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
