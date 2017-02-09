class BrickLayer {
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

function onReady() {
  $(document).mousemove(function(e) {
    $(".brick").css({ left: e.pageX, top: e.pageY })
  })

  $("#wall").click(function(event) {
    if (event.target.id == "wall") {
      var params = {
        height: 38,
        width: 80,
        left: event.pageX,
        top: event.pageY
      }

      var currentBrickLayer = new BrickLayer()
      var brick = currentBrickLayer.createBrick(params)
      currentWall = $(".wall")
      currentBrickLayer.stamp(brick, currentWall)
    }
  })
}

$(document).ready(onReady)
