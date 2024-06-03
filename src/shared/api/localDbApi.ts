import { getStorage } from '@sifrr/storage';

import type { initialState } from 'shared/configs/chatSlice';

type ChatState = typeof initialState;

const options = {
  // version number (integer / float / string), 1 is treated same as '1'
  desciption: 'Sifrr Storage',

  // Priority Array of type of storages to use
  name: 'chatStorage',

  priority: ['indexeddb', 'websql', 'localstorage'],

  // description (text)
  size: 5 * 1024 * 1024,

  // Max db size in bytes only for websql (integer)
  ttl: 0,
  // name of table (treat this as a variable name, i.e. no Spaces or special characters allowed)
  version: 1, // Time to live/expire for data in table (in ms), 0 = forever, data will expire ttl ms after saving
};
const storage = getStorage(options);

const saveChatToStorage = async (chat: ChatState) => {
  await storage.set('chat', chat);
};

const getChatFromStorage = async () => {
  const result = await storage.get('chat');
  return result;
};

export default { getChatFromStorage, saveChatToStorage };
