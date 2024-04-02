// feature redux
import * as counter from 'shared/configs/counterSlice';
// helpers
import getRootSaga from 'shared/helpers/getRootSaga';

const rootSagas = [counter.saga];

export default getRootSaga(rootSagas);
