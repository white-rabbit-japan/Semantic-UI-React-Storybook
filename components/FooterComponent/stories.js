import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import FooterComponent from './FooterComponent';

storiesOf('Footer component', module)
  .add('Footer', () => (
    <FooterComponent/>
  ));
