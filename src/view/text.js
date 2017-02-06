import h from 'snabbdom/h';
import createElements from './create-elements';

const span = ({ value }) => h('span', value);

export default (defaultProps = {}, stream) =>
  createElements(span, defaultProps, stream);
