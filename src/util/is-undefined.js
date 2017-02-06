import { identical, pipe, type } from 'ramda';

export default pipe(type, identical('undefined'));
