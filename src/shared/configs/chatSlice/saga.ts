import type { Effect, ForkEffect } from 'redux-saga/effects';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import api from 'shared/api';

import { selectChatState } from './selectors';
import type { initialState } from './slice';
import { actions } from './slice';

type ChatState = typeof initialState;
const { localDbApi } = api;

export function* loadChat(): Generator<Effect, void> {
  try {
    yield call(localDbApi.getChatFromStorage);
    yield put(actions.onChatSuccess());
  } catch (error) {
    yield put(actions.onChatFailure('Something went wrong!'));
  }
}

export function* saveChat(): Generator<Effect, void> {
  try {
    const chatState = yield select(selectChatState);
    yield call(localDbApi.saveChatToStorage, chatState as ChatState);
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
