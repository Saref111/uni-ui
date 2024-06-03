/* eslint-disable no-param-reassign */
// built-ins

import { createSlice } from '@reduxjs/toolkit';
// type
import type { PayloadAction } from '@reduxjs/toolkit';

export type Character = {
  id: string;
  name: string;
  description: string;
};

export type Message = {
  id: number;
  message: string;
  timestamp: number;
  isUser: boolean;
  character: Character;
};

export type InitialState = {
  messageList: Message[];
  loading: boolean;
  error: string | null;
  characterList: Character[];
};

export const initialState: InitialState = {
  characterList: [],
  error: null,
  loading: false,
  messageList: [],
};

const reducers = {
  addCharacter: (state: InitialState, action: PayloadAction<Character>) => {
    state.characterList.push(action.payload);
  },

  addMessage: (state: InitialState, action: PayloadAction<Message>) => {
    state.messageList.push(action.payload);
  },

  clearMessages: (state: InitialState) => {
    state.messageList = [];
  },

  onChatFailure: (state: InitialState, action: PayloadAction<string>) => {
    state.loading = false;
    state.error = action.payload;
  },
  onChatSuccess: (state: InitialState) => {
    state.loading = false;
  },
  removeCharacter: (state: InitialState, action: PayloadAction<string>) => {
    state.characterList = state.characterList.filter((character) => character.id !== action.payload);
  },
  removeMessage: (state: InitialState, action: PayloadAction<number>) => {
    state.messageList = state.messageList.filter((message) => message.id !== action.payload);
  },
  setCharacterList: (state: InitialState, action: PayloadAction<Character[]>) => {
    state.characterList = action.payload;
  },

  updateMessage: (state: InitialState, action: PayloadAction<Message>) => {
    const index = state.messageList.findIndex((message) => message.id === action.payload.id);
    state.messageList[index] = action.payload;
  },
};

const sagaActions = {
  loadChat: (state: InitialState) => {
    state.loading = true;
  },
  saveChat: (state: InitialState) => {
    state.loading = true;
  },
};

export const chatSlice = createSlice({
  initialState,
  name: 'chat',
  reducers: {
    ...reducers,
    ...sagaActions,
  },
});

export default chatSlice.reducer;
export const { actions } = chatSlice;
