import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import Board from './Board';
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
    const wrapper = Enzyme.mount(<Board />);
    expect(wrapper.containsMatchingElement(<Square />)).to.equal(true);
  });

  it('contains 9 squares, each set to null on load', () => {
    const wrapper = Enzyme.mount(<Board />);
    expect(wrapper.state('squares').length).to.equal(9);
    expect(wrapper.state('squares')[0]).to.equal(null);
  });

  it('allows us to see the Square state in the Board component', () =>
  {
    const wrapper = Enzyme.mount(<Board />);
    expect(wrapper.state('squares')[0]).to.equal(null);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('squares')[0]).to.equal('X');
  });

  it('allows us to set X as the next player on load', () =>{
    const wrapper = Enzyme.mount(<Board />);
    expect(wrapper.state('xGoesNext')).to.equal(true);
  });

  it('allows us to set O as the next player after on square is clicked', () =>{
    const wrapper = Enzyme.mount(<Board />);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('xGoesNext')).to.equal(false);
  });
});
