import React, { Component } from 'react'
import pink from './pf.jpg'
import './App.css'
import './Wall.css'
import Brick from './Brick.jsx'

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: null, moveX: "", moveY: "", fixX: "", fixY: "" }
    document.addEventListener("mousemove", this.move)
    document.addEventListener("click", this.handleClick)
  }

  handleClick = (e) => {
    console.log("clicou")
    console.log(e.clientX, e.clientY)
    this.setState({ fixX: e.pageX, fixY: e.pageY })
    let timesClicked = this.state.isClicked
    timesClicked++
    this.setState({isClicked: timesClicked})
    console.log(timesClicked)
  }

  move = (e) => {
    this.setState({ moveX: e.pageX, moveY: e.pageY })
  }

  render() {
    let timesClicked = this.state.isClicked
    let view

    for (var i=0; i < timesClicked; i++) {
      view = <Brick
        positionX={this.state.fixX}
        positionY={this.state.fixY} />
    }

    return (
      <div className="Wall">
        <img src={pink} className="pink" />
        <Brick
          positionX={this.state.moveX}
          positionY={this.state.moveY} />
          { view }
      </div>
    )
  }
}

module.exports = Wall
