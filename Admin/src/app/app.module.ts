import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ChildcategoryComponent } from './childcategory/childcategory.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { ReviewComponent } from './review/review.component';
import { TestimonComponent } from './testimon/testimon.component';
import { HeaderComponent } from './header/header.component';
import { EcomService } from './ecom.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfauthGuard } from './profauth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    SubcategoryComponent,
    ChildcategoryComponent,
    ProductComponent,
    SliderComponent,
    ReviewComponent,
    TestimonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EcomService,ProfauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
