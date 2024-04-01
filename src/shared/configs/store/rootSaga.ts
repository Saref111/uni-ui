// feature redux
import * as counter from 'features/Counter/redux';

// helpers
import getRootSaga from 'shared/helpers/getRootSaga';

const rootSagas = [counter.saga];

export default getRootSaga(rootSagas);
