import { createStore } from "redux";
const initProduct = {
  products: [],
  cart: []
};
const cartReducer = (state = initProduct, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id)
      };
    case "CHANGE_QTY":
      let tempCart = state.cart.map((c) => {
        if (c.id === action.payload.id) {
          return { ...c, qty: action.payload.qty };
        }
        return c;
      });
      return {
        ...state,
        cart: tempCart
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
