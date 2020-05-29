import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model'
import { Store } from '@ngrx/store'
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'
import { IShoppingcart } from '../models/ishoppingcart.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart
  constructor(private store: Store<IState>) { }

   
  cartTotal(){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let total = 0
    this.cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Amount(total))
  }

  cartItemCount(){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let counter = 0
    this.cart.forEach(item => {
      counter += item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Total(counter))
  }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(item => {return item.product.id === product.id})
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
    this.cartItemCount()
    this.cartTotal()
  }
  increment(shoppingCart) {
    this.store.dispatch(new ShoppingCartActions.Increment(shoppingCart))
    this.cartItemCount()
    this.cartTotal()

  }
  decrement(shoppingCart) {
    if(shoppingCart.quantity <= 1) {
      this.remove(shoppingCart.product.id)
      this.cartItemCount()
      this.cartTotal()
      return

    }else {
      this.store.dispatch(new ShoppingCartActions.Decrement(shoppingCart))
      this.cartItemCount()
      this.cartTotal()
    }
    }
   
  clear(){
    this.store.dispatch(new ShoppingCartActions.Clear())
  }
}


