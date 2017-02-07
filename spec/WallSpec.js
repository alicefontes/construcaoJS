describe("TheWallTests", function() {
  var params = { height: 38, width: 80, left: 70, top: 70 }
  var newBrickLayer = new BrickLayer()
  var newBrick = newBrickLayer.createBrick(params)

  it("checks params of the brick created", function() {
    expect(newBrick[0].style.height).toEqual(params.height + "px")
    expect(newBrick[0].style.width).toEqual(params.width + "px")
    expect(newBrick[0].style.left).toEqual(params.left + "px")
    expect(newBrick[0].style.top).toEqual(params.top + "px")
  });
});

// expect(newBrick[0].style).toHaveCss({ height: params.height + "px",
//       width: params.width + "px",
//       left: params.left,
//       top: params.top })
// });
