import React from 'react';
import Board from './Board';
// import './Game.css';

export default class Game extends React.Component {

  render(){
    return (
      <div className="game-wrapper">
        <Board />
      </div>
    );
  }
}
