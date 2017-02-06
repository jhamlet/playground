import { curry } from 'ramda';
import immutableMerge from 'util/immutable-merge';

export default curry((selector, defaultProps = {}, stream) =>
  stream.
  startWith(defaultProps).
  scan(immutableMerge, {}).
  distinctUntilChanged().
  map(selector).
  share()
);

