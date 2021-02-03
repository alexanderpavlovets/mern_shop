import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: []}, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find(x => x.product === item.product) // product here is ID

      if(existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x) // weird for now. Seems useless. Maybe order is important ?
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    default:
      return state
  }
}