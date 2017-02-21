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
    this.setState({ fixX: e.pageX, fixY: e.pageY })
    let timesClicked = this.state.isClicked
    timesClicked++
    this.setState({isClicked: timesClicked})
    console.log(timesClicked)
    const x = e.pageX
    const y = e.pageY
    this.setState({ valuesX: this.state.valuesX.concat(x),
                    valuesY: this.state.valuesY.concat(y) })

    return (
      console.log(x, y, this.state.isClicked, this.state.valuesX, this.state.valuesY)
    )
  }

  move = (e) => {
    this.setState({ moveX: e.pageX, moveY: e.pageY })
  }

  render() {

    let children = []
    let varx = this.state.fixX
    let vary = this.state.fixY

//erro tá aqui
    for (var i = 0; i < this.state.isClicked; i = i+1) {
      children.push(
        <Brick
          id={i+1}
          positionX={varx}
          positionY={vary} />)
    }

    return (
      <div className="Wall">
        <img src={pink} className="pink" />
        <Brick
          positionX={this.state.moveX}
          positionY={this.state.moveY} />
        { children }
      </div>
    )
  }
}

module.exports = Wall
