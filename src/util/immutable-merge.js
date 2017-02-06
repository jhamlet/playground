import { isEmpty, merge } from 'ramda';
import pickChanged from 'util/pick-changed';

export default (prev = {}, next = {}) =>
  isEmpty(pickChanged(prev, next)) ? prev : merge(prev, next);
