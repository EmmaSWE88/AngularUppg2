import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model'
import { Store } from '@ngrx/store'
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart
  constructor(private store: Store<IState>) { }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(p => {return p.product.id === product.id})
    this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
  }
  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }
  clear(){
    this.store.dispatch(new ShoppingCartActions.Clear())
  }
}


