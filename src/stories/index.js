import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import App from '../App';
import Item from '../components/Item';

storiesOf('Example', module)
  .add('first', () => <App />)
  .add('second', () => <Item />);
