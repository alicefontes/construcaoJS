import React, { Component } from 'react';

class Brick extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var fixedBrick = this.props.isClicked ? (new Brick(), console.log("novo")) : false

    var divStyle = {
      color: 'white',
      top: this.props.positionY,
      left: this.props.positionX
    };

    return (
      <div className="Brick" style={divStyle}>
      </div>
    );
  }

}

module.exports = Brick;
