import React from 'react';
import Square from './Square';
// import './Board.css';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xGoesNext: true
    }
  }

  // Creates a copy of this.state.squares array, changes copy's state, and then sets original state's squares equal to copy of squares
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xGoesNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xGoesNext: !this.state.xGoesNext
    });
  }

  renderSquare(i){
    return <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
            />;
  }

  render(){
    return (
      <div className="board-wrapper">
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
