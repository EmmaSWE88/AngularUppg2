import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { IShoppingcart } from '../../models/ishoppingcart.model'

const initialState: Array<IShoppingcart> = []

export function ShoppingCartReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.SHOPPINGCART_ADD:
            return state = [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE :
            return state = state.filter(item => item.product.id !== action.payload)

            case ActionTypes.SHOPPINGCART_CLEAR :
                return state = initialState
        default:
            return state
    }
}