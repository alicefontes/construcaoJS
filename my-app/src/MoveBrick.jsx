import React, { Component } from 'react'


class MoveBrick extends Component {
  render() {
    const { positionX, positionY } = this.props

    const divStyle = {
      top: positionY,
      left: positionX
    }

    return (
      <div className="MoveBrick" style={divStyle} />
    )
  }
}

module.exports = MoveBrick
