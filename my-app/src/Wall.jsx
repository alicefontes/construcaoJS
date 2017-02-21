import React, { Component } from 'react'
import pink from './pf.jpg'
import './App.css'
import './Wall.css'
import Brick from './Brick.jsx'

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = { moveX: "", moveY: "", fixX: "", fixY: "", isClicked: false }
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
        <div className="Wall" onClick={this.handleClick} onMouseMove={this.move}>
          <img src={pink} className="pink" />
          <Brick
            clicked={this.state.isClicked}
            positionX={this.state.moveX}
            positionY={this.state.moveY}
            setPositionX={this.state.fixX}
            setPositionY={this.state.fixY} />
        </div>
    )
  }
}

module.exports = Wall
