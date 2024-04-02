// built-ins
import { expectSaga } from 'redux-saga-test-plan';
// eslint-disable-next-line import/order
import { delay } from 'redux-saga/effects';

import { actions, initialState, reducer } from 'shared/configs/counterSlice';
import { describe, it } from 'shared/libs/vitest';

// redux

import { watchDecrementAsync, watchIncrementAsync, watchIncrementByAmountAsync } from './saga';

describe('Counter Saga Test Suite', () => {
  it('should run watchIncrementAsync saga', () => {
    return expectSaga(watchIncrementAsync)
      .withReducer(reducer)
      .provide([[delay(1000), null]])
      .put(actions.increment())
      .put(actions.onIncrementSuccess())
      .hasFinalState({
        ...initialState,
        count: 1,
      })
      .run();
  });

  it('should run watchDecrementAsync saga', () => {
    return expectSaga(watchDecrementAsync)
      .withReducer(reducer)
      .provide([[delay(1000), null]])
      .put(actions.decrement())
      .put(actions.onIncrementSuccess())
      .hasFinalState({
        ...initialState,
        count: -1,
      })
      .run();
  });

  it('should run watchIncrementByAmountAsync saga', () => {
    const action = actions.incrementByAmountAsync('5');
    return expectSaga(watchIncrementByAmountAsync, action)
      .withReducer(reducer)
      .provide([[delay(1000), null]])
      .put(actions.incrementByAmount(parseInt(action.payload as string, 10)))
      .put(actions.onIncrementSuccess())
      .hasFinalState({
        ...initialState,
        count: 5,
      })
      .run();
  });

  it('should fail watchIncrementByAmountAsync saga', () => {
    const action = actions.incrementByAmountAsync('xxx');
    return expectSaga(watchIncrementByAmountAsync, action)
      .withReducer(reducer)
      .provide([[delay(1000), null]])
      .put(actions.onIncrementFailure())
      .hasFinalState({
        ...initialState,
        count: 0,
      })
      .run();
  });
});
