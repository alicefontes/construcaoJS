class BrickLayer {
  //manter esse codigo e mudar a classe para pedreiro
  createBrick(params) {
    const brick = $("<div></div>")

    brick.css({
      height: params.height + "px",
      width: params.width + "px",
      left: params.left + "px",
      top: params.top + "px"
    })

    return brick
  }

  stamp(brick, currentWall) {
    brick.addClass("fixedBrick")
    currentWall.append(brick)
  }
}

$(document).ready(function() {
  $(document).mousemove(function(e) {
    $(".brick").css({ left: e.pageX, top: e.pageY })
  })

  $(document).click(function(e) {
    if (event.target.id == "wall") {
      var params = {
        height: 38,
        width: 80,
        left: e.pageX,
        top: e.pageY
      }

      var currentBrickLayer = new BrickLayer()
      var brick = currentBrickLayer.createBrick(params)
      currentWall = $(".wall")
      currentBrickLayer.stamp(brick, currentWall)
    }
  })
})
