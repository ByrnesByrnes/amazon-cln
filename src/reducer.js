export const state = {
  cart: [],
  user: null
}

export const getCartSubtotal = (cart) => 
  cart.reduce((a, item) => item.price + a ,0)


export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart,action.payload]
      }
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(item => item.id === action.payload)
      const newCart = [...state.cart]
      index >= 0 ? newCart.splice(index, 1) : console.warn(`Id: ${action.payload} doesn't exist.`)
      return {
        ...state,
        cart: newCart
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}