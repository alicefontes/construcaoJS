import React, { Component } from 'react'
import pink from './pf.jpg'
import './App.css'
import './Wall.css'
import Brick from './Brick.jsx'

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state = { valuesX: [], valuesY: [], isClicked: null, moveX: "", moveY: "", fixX: "", fixY: "" }
    document.addEventListener("mousemove", this.move)
    document.addEventListener("click", this.handleClick)
  }

  handleClick = (e) => {
    if (e.target.id === "wall") {
      this.setState({ fixX: e.pageX, fixY: e.pageY })
      let timesClicked = this.state.isClicked
      timesClicked++
      this.setState({ isClicked: timesClicked })
      this.setState({ valuesX: this.state.valuesX.concat(e.pageX),
                      valuesY: this.state.valuesY.concat(e.pageY) })
    }
  }

  move = (e) => {
    this.setState({ moveX: e.pageX, moveY: e.pageY })
  }

  render() {

    let children = []

    for (var i = 0; i < this.state.isClicked; i = i+1) {
      children.push(
        <Brick
          id="brick"
          positionX={this.state.valuesX[i]}
          positionY={this.state.valuesY[i]} />)
    }

    return (
      <div className="Wall">
        <img src={pink} className="pink" id="wall" />
        <Brick id="brick"
          positionX={this.state.moveX}
          positionY={this.state.moveY} />
        { children }
      </div>
    )
  }
}

module.exports = Wall
