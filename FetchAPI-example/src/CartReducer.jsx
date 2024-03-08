import React, { createContext, useContext, useReducer } from 'react';
import products from './products.json';

const CartContext = createContext();

const initialState = {
  cart: [],
  count: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        // if (state.cart.find(item => item.id === action.payload.id)) {
        //     return state;
        // }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.count + 1
      };
      
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    if (!state || !dispatch) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return { state, dispatch };
  };
  

export { CartProvider, useCart, products };
