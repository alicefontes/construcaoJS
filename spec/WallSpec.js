describe("TheWallTests", function() {
  var params = { height: 38, width: 80, left: 70, top: 70 }
  var newBrickLayer = new BrickLayer()
  var newBrick = newBrickLayer.createBrick(params)
  currentWall = $(".wall")
  newBrickLayer.stamp(newBrick, currentWall)

  it("checks params of the brick created", function() {
    expect(newBrick[0].style.height).toEqual(params.height + "px")
    expect(newBrick[0].style.width).toEqual(params.width + "px")
    expect(newBrick[0].style.left).toEqual(params.left + "px")
    expect(newBrick[0].style.top).toEqual(params.top + "px")
  });

  it("checks new className after stamp", function() {
    expect(newBrick[0].className).toContain("fixedBrick")
  });
});

// expect(newBrick[0].style).toHaveCss({ height: params.height + "px",
//       width: params.width + "px",
//       left: params.left,
//       top: params.top })
// });
