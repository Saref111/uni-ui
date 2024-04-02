// built-ins
import type { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// types
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootActionType } from './rootActions';

import type { StateType } from './index';

export type DispatchType = Dispatch<RootActionType>;
export type SelectorType = TypedUseSelectorHook<StateType>;

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector = useSelector as SelectorType;
