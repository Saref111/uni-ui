// feature redux
import * as chat from 'shared/configs/chatSlice';
import * as counter from 'shared/configs/counterSlice';

const rootReducer = {
  chat: chat.reducer,
  counter: counter.reducer,
};

export type RootReducerType = typeof rootReducer;

export default rootReducer;
