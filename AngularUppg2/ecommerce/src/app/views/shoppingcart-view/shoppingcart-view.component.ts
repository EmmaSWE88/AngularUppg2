import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { IShoppingcart } from 'src/app/models/ishoppingcart.model'

@Component({
  selector: 'app-shoppingcart-view',
  templateUrl: './shoppingcart-view.component.html',
  styleUrls: ['./shoppingcart-view.component.css']
})
export class ShoppingcartViewComponent implements OnInit {

  public shoppingcart: Array<IProduct>
  public shoppingcartTotal: number = 0
  public shoppingcartAmount: number = 0

  constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.store.select(store => store.shoppingcart).subscribe(res => this.shoppingcart = res)
    this.store.select(store => store.shoppingcartTotal).subscribe(res => this.shoppingcartTotal = res)
    this.store.select(store => store.shoppingcartAmount).subscribe(res => this.shoppingcartAmount = res)
    //this.shoppingcart = this.store.select(store => store.shoppingcart)
  }
  removeFromCart(id) {
    this.shoppingCartService.remove(id)
    console.log(this);
    
  }

  incrementCartItem(item){
    this.shoppingCartService.increment(item)
  }

  decrementCartItem(item) {
    this.shoppingCartService.decrement(item)
  }
 
}
