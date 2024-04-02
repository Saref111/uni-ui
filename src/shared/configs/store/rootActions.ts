// type
import type { SliceActions } from 'shared/helpers/configureStore';

import * as counter from '../counterSlice';

const rootActions = {
  ...counter.actions,
};

export type RootActionType = SliceActions<typeof rootActions>;

export default rootActions;
