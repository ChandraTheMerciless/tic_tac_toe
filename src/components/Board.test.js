import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Square from './Square';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Board />', () => {
  it('allows us to set props', () => {
    const wrapper = Enzyme.mount(<Board bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('allows us to render the Square component', () => {
    const wrapper = Enzyme.mount(<Board bar="baz" />);
    expect(wrapper.containsMatchingElement(<Square />)).to.equal(true);
  });
});
