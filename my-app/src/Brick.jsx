import React, { Component } from 'react'


class Brick extends Component {
  render() {
    const { positionX, positionY } = this.props

    const divStyle = {
      top: positionY,
      left: positionX
    }

    return (
      <div className="Brick" style={divStyle} />
    )
  }
}

module.exports = Brick
