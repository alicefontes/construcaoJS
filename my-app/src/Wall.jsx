import React, { Component } from 'react'
import pink from './pf.jpg'
import './App.css'
import './Wall.css'
import Brick from './Brick.jsx'

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = { moveX: "", moveY: "", fixX: "", fixY: "" }
    document.addEventListener("mousemove", this.move)
    document.addEventListener("click", this.handleClick)
  }

  handleClick = (e) => {
    console.log("clicou")
    console.log(e.clientX, e.clientY)
    this.setState({ fixX: e.pageX, fixY: e.pageY })
    return (
      <Brick
        setPositionX={this.state.fixX}
        setPositionY={this.state.fixY} />
    )
  }

  move = (e) => {
    this.setState({ moveX: e.pageX, moveY: e.pageY })
  }

  render() {
    return (
      <div className="Wall">
        <img src={pink} className="pink" />
        <Brick
          positionX={this.state.moveX}
          positionY={this.state.moveY} />

        <Brick
          positionX={this.state.fixX}
          positionY={this.state.fixY} />
      </div>
    )
  }
}

module.exports = Wall
