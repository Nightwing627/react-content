// Header.js
import React from 'react';
import withCart from './withCart';

class Header extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <React.Fragment>
      { cart.length === 0 ? <div> Empty cart </div> : <div> Items in cart : ({cart.length}) </div> }
      </React.Fragment>
    );
  }
}
const HeaderWithCart = withCart(Header);
export default HeaderWithCart;