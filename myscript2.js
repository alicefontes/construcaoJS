$(document).ready(function(){
  $(document).mousemove(function(e){
    $(".brick").css({
       left:  e.pageX,
       top:   e.pageY
    });
  });
  $(document).click(function(e){
    $(".wall").append("<div class='brick2' style='left: "+e.pageX+"px; top: "+e.pageY+"px;'></div>");
  });
});
