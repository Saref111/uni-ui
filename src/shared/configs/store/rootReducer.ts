// feature redux
import * as counter from 'shared/configs/counterSlice';

const rootReducer = {
  counter: counter.reducer,
};

export type RootReducerType = typeof rootReducer;

export default rootReducer;
