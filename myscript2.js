class Brick {
  constructor(params) {
    this.brick = $("<div></div>");
    this.brick["0"].className = "brick2";
    this.brick["0"].style.height = params.height + "px";
    this.brick["0"].style.width = params.width + "px";
    this.brick["0"].style.left = params.left + "px";
    this.brick["0"].style.top = params.top + "px";
  };

  stamp() {
    $(".wall").append(this.brick);
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
      myNewBrick.stamp();
    };
  });
});
