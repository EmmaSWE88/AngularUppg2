import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IShoppingcart } from 'src/app/models/ishoppingcart.model'

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IShoppingcart) {}
}

export class Remove implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_REMOVE
    constructor(public payload: string) {}
}

export class Clear implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_CLEAR
    constructor() {}
}

export type Actions = Add | Remove | Clear