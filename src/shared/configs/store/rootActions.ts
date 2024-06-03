// type
import type { SliceActions } from 'shared/helpers/configureStore';

import * as chat from '../chatSlice';
import * as counter from '../counterSlice';

const rootActions = {
  ...counter.actions,
  ...chat.actions,
};

export type RootActionType = SliceActions<typeof rootActions>;

export default rootActions;
