import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BrandsComponent } from './Brands/Brands.component';
import { GiftsComponent } from './Gifts/Gifts.component';
import { AuthComponent } from './Auth/Auth.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './shared/carousel/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { Shop_moreComponent } from './men/shop_more/shop_more.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout/checkout.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Admin_headComponent } from './admin/admin_head/admin_head.component';
import { Cart_adminComponent } from './admin/cart_admin/cart_admin/cart_admin.component';
import { Product_adminComponent } from './admin/products_admin/product_admin/product_admin.component';
import { Add_productComponent } from './admin/products_admin/product_admin/add_product/add_product.component';
import { UpdateComponent } from './admin/products_admin/product_admin/update/update.component';
import { MatrialComponent } from './matrial/matrial.component';
import { MatrialModule } from './matrial/matrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      MenComponent,
      WomenComponent,
      BrandsComponent,
      GiftsComponent,
      AuthComponent,
      ProductComponent,
      MainComponent,
      CarouselComponent,
      Shop_moreComponent,
      CartComponent,
      CheckoutComponent,
      Admin_headComponent,
      Cart_adminComponent,
      Product_adminComponent,
      Add_productComponent,
      UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatrialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
