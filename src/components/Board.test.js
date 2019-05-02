import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Board />', () => {
  const wrapper = Enzyme.mount(<Board bar="baz" />);
  it('allows us to set props', () => {
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('allows us to render the Square component', () => {
    expect(wrapper.containsMatchingElement(<button />)).to.equal(true);
  });

  it('contains 9 squares, each set to null on load', () => {
    expect(wrapper.state('squares').length).to.equal(9);
    expect(wrapper.state('squares')[0]).to.equal(null);
  });

  it('allows us to see the Square state in the Board component', () =>
  {
    expect(wrapper.state('squares')[0]).to.equal(null);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('squares')[0]).to.equal('X');
  });
});
