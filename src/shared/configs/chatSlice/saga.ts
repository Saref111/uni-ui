// built-ins
import { delay, put, takeEvery } from 'redux-saga/effects';
// types
import type { Effect, ForkEffect } from 'redux-saga/effects';

// actions
import { actions } from './slice';

export function* loadChat(): Generator<Effect, void> {
  try {
    yield delay(1000); // TODO: replace with API call
    yield put(actions.onChatSuccess());
  } catch (error) {
    yield put(actions.onChatFailure('Something went wrong!'));
  }
}

export function* saveChat(): Generator<Effect, void> {
  try {
    yield delay(1000); // TODO: replace with API call
    yield put(actions.onChatSuccess());
  } catch (error) {
    yield put(actions.onChatFailure('Something went wrong!'));
  }
}

export function* watchChatSagas(): Generator<ForkEffect, void> {
  yield takeEvery(actions.loadChat, loadChat);
  yield takeEvery(actions.saveChat, saveChat);
}

const chatSagas = watchChatSagas;

export default chatSagas;
