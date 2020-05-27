import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart/shoppingcart.component';
import { CartItemComponent } from './components/shoppingcart/cart-item/cart-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { ShoppingcartViewComponent } from './views/shoppingcart-view/shoppingcart-view.component';
import { ShoppingCartTotalReducer } from './store/reducers/shoppingcart-total';
import { ShoppingCartAmountReducer } from './store/reducers/shoppingcart-amount';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogViewComponent,
    ProductViewComponent,
    ProductGridComponent,
    ShoppingcartComponent,
    CartItemComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageViewComponent,
    ShoppingcartViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer,
      shoppingcartTotal: ShoppingCartTotalReducer,
      shoppingcartAmount: ShoppingCartAmountReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
