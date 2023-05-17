

import { addons, types } from '@storybook/manager-api';
import { Panel } from './components/Panel';
import { ADDON_ID, PANEL_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: 'Html',
    type: types.PANEL,
    match: ({ viewMode }) => viewMode === "story",
    render: Panel
  });
});