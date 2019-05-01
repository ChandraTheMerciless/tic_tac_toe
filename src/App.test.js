import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './components/Game';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('allows us to set props', () => {
    const wrapper = Enzyme.mount(<App bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('allows us to render the Game in the All', () => {
    const wrapper = Enzyme.mount(<App />);
    expect(wrapper.containsMatchingElement(<Game />)).to.equal(true);
  })
});
