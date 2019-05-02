import React from 'react';
// import './Game.css';

export default class Square extends React.Component {

  render(){
    return (
      <button
        className="Square"
        onClick={() => this.props.onClick()}
        id={this.props.id}>
        {this.props.value}
      </button>
    );
  }
}
