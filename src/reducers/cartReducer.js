const initialData = {
  cart: [],
};

function cartReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_CART":
      return {
        ...state,
        cart: state.cart.filter((del) => del.id !== action.payload.id),
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: action.payload.quantity }
            : cartItem
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
