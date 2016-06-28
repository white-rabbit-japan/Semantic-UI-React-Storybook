import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import Progress from './Progress';

{/*
import MasterLayout from '../layouts/masterLayout';

*/}
storiesOf('Progress', module)
  .add('orange inverted 33 complete', () => (
    <div className="page content">

      <Progress completed='33' className="inverted orange">Mom</Progress>

    </div>
  ))
  .add('teal 66 complete', () => (
    <div className="page content">
      <Progress completed='66' className="teal" color>Mom</Progress>
    </div>
  ))

