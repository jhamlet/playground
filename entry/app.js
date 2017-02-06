// snabbdom setup
import { init } from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModules from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventsModule from 'snabbdom/modules/eventlisteners';
// import h from 'snabbdom/h';

const patch = init([ classModule, propsModules, styleModule, eventsModule ]);

import { Observable, Subject } from 'rxjs';
const { interval } = Observable;

const Model = () => {
  const inputs = new Subject();

  const states =
    inputs.
    startWith(null).
    switchMap(() => interval(1000)).
    map(i => `Sequence ${i}`).
    publishBehavior('Sequence 0').
    refCount();

  return Subject.create(inputs, states);
};

import createTextView from 'view/text';

const Component = () => {
  const model = Model();
  const props = model.map(value => ({ value }));
  const vnodes = createTextView({ value: 'Sequence 0' }, props);

  return vnodes.
    map(vnode =>
      Object.assign(vnode.data.on || (vnode.data.on = {}), {
        mouseover: () => model.next()
      }) && vnode
    );
};

// our render loop
const main = (vdoms, root) => {
  let previous = root;
  vdoms.
    subscribe(vdom => previous = patch(previous, vdom));
};

const root = document.createElement('div');
document.body.insertBefore(root, document.body.children[0]);

main(Component(), root);
