import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model'
import { Store } from '@ngrx/store'
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
 
  constructor(private store: Store<IState>) { }
  private cart
   
  cartTotal(){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let total = 0
    this.cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Total(total))
  }

  cartItemCount(){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let counter = 0
    this.cart.forEach(item => {
      counter += item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Amount(counter))
  }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(p => {return p.product.id === product.id})
    if(!exists){
      this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
    } else {
      this.increment({product, quantity})
    }
    this.cartItemCount()
    this.cartTotal()
  }
  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }
  increment(product) {
    this.store.dispatch(new ShoppingCartActions.Increment(product))
  }
  decrement(product) {
    if(product.quantity <= 1) {
      this.remove(product.product.id)
    }else {
      this.store.dispatch(new ShoppingCartActions.Decrement(product))
    }
    }
   
  clear(){
    this.store.dispatch(new ShoppingCartActions.Clear())
  }
}


