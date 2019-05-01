import React from 'react';
// import './Game.css';

export default class Square extends React.Component {

  render(){
    return (
      <button className="Square">
        {this.props.value}
      </button>
    );
  }
}
