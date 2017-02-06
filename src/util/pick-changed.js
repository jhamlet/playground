import { curry, pickBy } from 'ramda';

export default curry((a, b) => pickBy((k, v) => v !== a[k], b));


