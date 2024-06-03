// store
import type { StateType } from 'shared/configs/store';

export const getMessages = (state: StateType) => state.chat.messageList;
export const getCharacters = (state: StateType) => state.chat.characterList;
export const getLoading = (state: StateType) => state.chat.loading;
export const getError = (state: StateType) => state.chat.error;
export const selectChatState = (state: StateType) => state.chat;
