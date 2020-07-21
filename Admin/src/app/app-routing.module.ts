import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { CategoryComponent } from './category/category.component';
import{SubcategoryComponent} from './subcategory/subcategory.component';

import { ChildcategoryComponent } from './childcategory/childcategory.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { ReviewComponent } from './review/review.component';
import { TestimonComponent } from './testimon/testimon.component';
import { ProfauthGuard } from './profauth.guard';
const routes: Routes = [
  {path : '',redirectTo:'/login',pathMatch:'full' },
  {path :'login',component:LoginComponent   },
  {path:'category',component:CategoryComponent,canActivate:[ProfauthGuard]},
  {path:'subcategory',component:SubcategoryComponent,canActivate:[ProfauthGuard]},
  {path:'childcategory',component:ChildcategoryComponent,canActivate:[ProfauthGuard]},
  {path:'product',component:ProductComponent,canActivate:[ProfauthGuard]},
  {path:'slider',component:SliderComponent,canActivate:[ProfauthGuard]},
  {path:'review',component:ReviewComponent,canActivate:[ProfauthGuard]},
  {path:'testimon',component:TestimonComponent,canActivate:[ProfauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
