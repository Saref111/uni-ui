// feature redux
import * as chat from 'shared/configs/chatSlice';

const rootReducer = {
  // counter: counter.reducer,
  chat: chat.reducer,
};

export type RootReducerType = typeof rootReducer;

export default rootReducer;
