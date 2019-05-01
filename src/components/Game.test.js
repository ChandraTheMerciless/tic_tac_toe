import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../src/Game';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Game />', () => {
  it('allows us to set props', () => {
    const wrapper = Enzyme.mount(<Game bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});
