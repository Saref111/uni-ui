// feature redux
import * as chat from 'shared/configs/chatSlice';
import * as counter from 'shared/configs/counterSlice';
// helpers
import getRootSaga from 'shared/helpers/getRootSaga';

const rootSagas = [counter.saga, chat.saga];

export default getRootSaga(rootSagas);
