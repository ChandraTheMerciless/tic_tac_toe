import React from 'react';
import Game from './components/Game'
import './App.css';

export default class App extends React.Component {



  render(){
    return (
      <div className="app-container">
        <Game />
      </div>
    );
  }
}
