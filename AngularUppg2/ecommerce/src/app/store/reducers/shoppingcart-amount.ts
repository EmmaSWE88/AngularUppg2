import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'

const initState: number = 0

export function ShoppingCartAmountReducer(state = initState, action: Actions) {
    switch(action.type){
        case ActionTypes.SHOPPINGCART_AMOUNT:
            return state = action.payload
        default:
            return state
    }
}