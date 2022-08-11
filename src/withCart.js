import React from 'react';
import CartContext from './cart';

// withCart.js
export const withCart = (Component) => {
    return function fn(props) {
      return ( 
        <CartContext.Consumer> {
          (context) => <Component {...props} { ...context} />} 
        </CartContext.Consumer>
      );
    };
};