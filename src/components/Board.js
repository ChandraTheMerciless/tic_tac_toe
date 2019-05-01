import React from 'react';
import Square from './Square';
// import './Board.css';

export default class Board extends React.Component {
  renderSquare(i){
    return <Square />;
  }

  render(){
    return (
      <div className="Board">
        <div className="row">
          {this.renderSquare(0)}
        </div>
      </div>
    );
  }
}
