import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

const initialState: Array<IShoppingCart> = []

export function ShoppingCartReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.SHOPPINGCART_ADD:
            return state = [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE :
            return state = state.filter(item => item.product.id !== action.payload)

        default:
            return state
    }
}