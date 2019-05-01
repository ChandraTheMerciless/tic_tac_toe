import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Square />', () => {
  it('allows us to set props', () => {
    const wrapper = Enzyme.mount(<Square bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('allows us to change the state on a button click', () => {
    const wrapper = Enzyme.mount(<Square />);
    wrapper.prop('onClick')();
    expect(wrapper.state('value')).to.equal("X");
  })
});
