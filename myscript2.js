class Brick {
  constructor(params) {
    this.brick = $("<div></div>");
    this.brick.css({
      height: params.height + "px",
      width: params.width + "px",
      left: params.left + "px",
      top: params.top + "px"
    });
  };

  stamp(currentWall) {
    this.brick.addClass("fixedBrick");
    currentWall.append(this.brick);
  };
};

$(document).ready(function() {
  $(document).mousemove(function(e) {
    $(".brick").css({ left: e.pageX, top: e.pageY });
  });

  $(document).click(function(e) {
    if (event.target.id == "wall") {
      var params = {
        height: 38,
        width: 80,
        left: e.pageX,
        top: e.pageY
      };

      var myNewBrick = new Brick(params);
      currentWall = $(".wall");
      myNewBrick.stamp(currentWall);
    };
  });
});
//clicar para deixar o mesmo tijolo que esta se movendo
