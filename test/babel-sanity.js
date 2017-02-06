import { expect } from 'chai';

describe('babel-sanity', () => {

  it('should be bar', () => {
    expect('bar').to.equal('bar');
  });

  it('should default params', () => {
    const fn = ({ foo = 'foo' } = {}) => foo;

    expect(fn()).to.equal('foo');
  });

  it('should do rest ...args', () => {
    const fn = (...args) => args;
    expect(fn(1, 2, 3)).to.deep.equal([1, 2, 3]);
  });

  it('should do object rest spread', () => {
    const larry = 'larry';
    const harry = 'harry';
    const o = { larry, harry };
    const { ...rest } = o;

    expect(rest).to.deep.equal(o);
  });

  it('should spread back into an object', () => {
    const foo = 'foo';
    const bar = 'bar';
    const obj = { foo, bar };
    const { ...rest } = obj;

    expect({ ...rest }).to.deep.equal(obj);
  });
});
