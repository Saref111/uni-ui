// helpers
import configureStore from 'shared/helpers/configureStore';

// Root Reducer, Actions and Sagas
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export { useAppDispatch, useAppSelector } from './hooks';

const store = configureStore({
  reducer: rootReducer,
  sagaActionWatcher: rootSaga,
});

export { rootReducer, rootSaga };

export type StateType = ReturnType<typeof store.getState>;

export default store;
