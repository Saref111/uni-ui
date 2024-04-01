// store
import type { StateType } from 'shared/configs/store';

export const getCount = (state: StateType) => state.counter.count;
export const getLoading = (state: StateType) => state.counter.loading;
