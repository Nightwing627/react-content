// cart.js
import React from 'react';

const CartContext = React.createContext({
  cart: [],
  addItem: () => {}
});

export default CartContext;