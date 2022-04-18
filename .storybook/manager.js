// .storybook/manager.js

import { addons } from '@storybook/addons';
import iux from './iux';

addons.setConfig({
  theme: iux,
});