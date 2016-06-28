import React from 'react';
import {configure, setAddon, addDecorator} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

addDecorator((story) => (
  <div style={{padding: "20px"}}>
    {story()}
  </div>
));


function loadStories() {

  require('../components/');

  // require as many stories as you need.
}

setAddon(infoAddon);

configure(loadStories, module);