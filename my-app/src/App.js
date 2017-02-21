import React, { Component } from 'react'
import logo from './logo.svg'
import pink from './pf.jpg'
import './App.css'
import './Wall.css'
import Brick from './Brick.jsx'

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = {moveX: "", moveY: "", fixX: "", fixY: "", isClicked: false}
    document.addEventListener("mousemove", this)
  }

  handleClick = (e) => {
    console.log("clicou")
    console.log(e.clientX, e.clientY)
    this.setState({ isClicked: true, fixX: e.pageX, fixY: e.pageY })
  }

  move = (e) => {
    console.log(e.clientX, e.clientY)
    this.setState({ isClicked: false, moveX: e.pageX, moveY: e.pageY })
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
        <div className="Wall" onClick={this.handleClick} onMouseMove={this.move}>
          <img src={pink} className="pink" />
          <Brick
            clicked={this.state.isClicked}
            positionX={this.state.moveX}
            positionY={this.state.moveY}
            setPositionX={this.state.fixX}
            setPositionY={this.state.fixY} />
        </div>
      </div>
    )
  }
}

export default Wall
