import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import AnyComponent from './AnyComponent';
import CartProvider from './CartProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Sample />
          <AnyComponent />
          <CartProvider />
        </header>
      </div>
    );
  }
}

export default App;
