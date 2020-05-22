import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IShoppingCart) {}
}

export class Remove implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_REMOVE
    constructor(public payload: string) {}
}

export type Actions = Add | Remove