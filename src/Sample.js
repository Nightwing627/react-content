import React from 'react';
import Theme from './theme';

const Sample = () => (
    <Theme.Consumer>
      {theme => <div>Theme value: {theme}</div>}
    </Theme.Consumer>
);

export default Sample;