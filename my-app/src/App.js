import React, { Component } from 'react';
import logo from './logo.svg';
import pink from './pf.jpg';
import './App.css';
import './Wall.css';

var Brick = require('./Brick.jsx');

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0, x: "", y: ""};
    //define aqui e coloca o bind p poder usar o this.nome nas funcoes
    this.handleClick = this.handleClick.bind(this);
    this.move = this.move.bind(this);
    document.addEventListener("mousemove", this)
  }

  handleClick(e) {
    // this.setState();
    console.log(e.pageX)
  }

  move(e) {
    // this.setState((prevState) => ({}));
    console.log(e.clientX, e.clientY)
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

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
        <div className="Wall" onClick={this.handleClick} onMouseMove={this.move} >
          <img src={pink} className="pink"/>
          <Brick>
          </Brick>
        </div>
      </div>
    );
  }
}


export default Wall;
