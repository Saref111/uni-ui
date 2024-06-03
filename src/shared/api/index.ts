import { Api } from './Api';
import localDbApi from './localDbApi';

const modelApi = new Api({
  baseUrl: 'https://selection-updating-etc-nec.trycloudflare.com/',
});

export default { localDbApi, modelApi };
