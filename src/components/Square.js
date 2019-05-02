import React from 'react';
// import './Game.css';

// export default class Square extends React.Component {
//
//   render(){
//     return (
//       <button
//         className="square-wrapper"
//         onClick={() => this.props.onClick()}
//
//         <span>{this.props.value}</span>
//       </button>
//     );
//   }
// }


function Square(props) {
  return (
    <button
      className="square-wrapper"
      onClick={props.onClick}>

      <span>{props.value}</span>
    </button>
  );
}

export default Square;
