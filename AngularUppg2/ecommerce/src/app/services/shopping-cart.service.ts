import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model'
import { Store } from '@ngrx/store'
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private store: Store<IState>) { }

  add(product, quantity) {
    this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
  }
  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }
}


