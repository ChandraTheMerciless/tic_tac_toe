import React from 'react';
import Square from './Square';
// import './Board.css';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  // Creates a copy of this.state.squares array, changes copy's state, and then sets original state's squares equal to copy of squares
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i){
    return <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
              id={i}
            />;
  }

  render(){
    return (
      <div className="Board">
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
