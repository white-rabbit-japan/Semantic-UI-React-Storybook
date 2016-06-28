import {configure} from '@kadira/storybook';

function loadStories() {

  require('../components/');

  // require as many stories as you need.
}

configure(loadStories, module);