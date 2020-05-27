import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component'
import { ProductViewComponent } from './views/product-view/product-view.component'
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { ShoppingcartViewComponent } from './views/shoppingcart-view/shoppingcart-view.component'



const routes: Routes = [
  { path: '', component: LandingPageViewComponent},
  { path: 'products', component: ProductCatalogViewComponent},
  { path: 'products/:id', component: ProductViewComponent},
  { path: 'shoppingcart', component: ShoppingcartViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
