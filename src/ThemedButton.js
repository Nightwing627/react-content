import React from 'react';
import Theme from './theme.js';

const ThemedButton = (props) => ( 
  <React.Fragment>
    <h3>Themed button</h3>
    <Theme.Consumer> 
    { theme => <button { ...props } > button with theme: {theme} </button>} 
    </Theme.Consumer>
  </React.Fragment>
);
export default ThemedButton