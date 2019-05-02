import React from 'react';
// import './Game.css';

export default class Square extends React.Component {

  render(){
    return (
      <button
        className="square-wrapper"
        onClick={() => this.props.onClick()}
        id={this.props.id}>
        <span>{this.props.value}</span>
      </button>
    );
  }
}
