export const state = {
  cart: [],
  user: null
}

export const getCartSubtotal = (cart) => 
  cart.reduce((a, item) => item.price + a ,0)

//emulating Tax
export const getCartTotal = (subTotal) => (subTotal * 1.13).toFixed(2)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(item => item.id === action.payload)
      const newCart = [...state.cart]
      index >= 0 ? newCart.splice(index, 1) : console.warn(`Id: ${action.payload} doesn't exist.`)
      return {
        ...state,
        cart: newCart
      }

    case 'EMPTY_CART':
      return state = {
        ...state,
        cart: action.payload
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