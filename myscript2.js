class Brick {
  constructor(params) {
    this.brick = $("<div class='brick2' style='left: " + params.left + "px; top: " + params.top + "px; width:" + params.width + "px; height:" + params.height + "px;'></div>");
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
      var x = new Brick(params);
      $(".wall").append(x);
    };
  });
});
