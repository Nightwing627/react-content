// CartPage.js
import React from 'react';
import CartContext from './cart';

const products = [{
  id: 1,
  title: 'Fortnite'
},
{
  id: 2,
  title: 'Doom'
},
{
  id: 3,
  title: 'Quake'
}]

const CartPage = () => ( 
  <CartContext.Consumer> 
  {({ cart, addItem }) => (
    <React.Fragment>
    <div>
      <h2>Product list</h2>
      {products.map(p => <button onClick={() => addItem(p)} value={p}>{p.title}</button>)}
    </div>
    <div>
      <h2>Cart</h2> 
      {cart.map(item => <div> {item.title} </div>)}
    </div>
    </React.Fragment>
  )}
  </CartContext.Consumer>
);

export default CartPage;