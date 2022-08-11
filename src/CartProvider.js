import React from 'react';
import CartPage from './CartPage';
import CartContext from './cart';

class CartProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      addItem: (item) => {
        this.setState({
          cart: [...this.state.cart, {
            ...item
          }]
        })
      }
    }
  }
  render() {
    return (
      <CartContext.Provider value = {this.state} >
        <CartPage />
      </CartContext.Provider>
    );
  }
}

export default CartProvider;