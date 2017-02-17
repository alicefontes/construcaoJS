import React, { Component } from 'react';
import logo from './logo.svg';
import pink from './pf.jpg';
import './App.css';
import './Wall.css';
import ReactCursorPosition from 'react-cursor-position';

// class Brick extends Component {
//     constructor() {
//     super()
//     this.className = "brick"
//   }
//
//     render() {
//     return (
//       <div className="brick">
//         <div className="teste">
//         </div>
//       </div>
//     );
//   }
//
// }

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0, x: "", y: ""};
    this.handleClick = this.handleClick.bind(this);
    document.addEventListener("mousemove", this)
  }

  handleClick() {
    // this.setState();
    console.log('clicou')
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }
  //
  // function move(event) {
  //   var e = event || window.event;
  //   if (e) {
  //     this.x = e.clientX
  //     console.log(e.clientX)
  //   }
  // }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Wall</h2>
        </div>
        <p className="App-intro">
          Click anywhere to start building.
        </p>
        <div className="App-intro">Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div className="Wall" onClick={this.handleClick}>
          <img src={pink} className="pink"/>
          <div className="Brick">
          </div>
        </div>
      </div>
    );
  }
}


export default Wall;
