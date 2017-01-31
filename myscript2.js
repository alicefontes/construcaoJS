class Brick {
  constructor(params) {
    this.brick = $("<div></div>");
    this.brick["0"].className = "brick2";
    this.brick.css({height: params.height + "px"});
    this.brick.css({width: params.width + "px"});
    this.brick.css({left: params.left + "px"});
    this.brick.css({top: params.top + "px"});
  };

  stamp(currentWall) {
    currentWall.append(this.brick);
  };
};

$(document).ready(function() {
  $(document).mousemove(function(e) {
    $(".brick").css({
       left:  e.pageX,
       top:   e.pageY
    });
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


//mudar o nome do tijolo so quando tiver clicando
