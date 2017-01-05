// function showCoords(event) {
//     var x = event.screenX;
//     var y = event.screenY;
//     var coords = "X coords: " + x + ", Y coords: " + y
//     document.getElementById("demo").innerHTML = coords;
// }


function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('msg').innerHTML = e.clientX + ', ' +
           e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}


var followCursor = (function() {
  var s = document.createElement('div');
  s.style.position = 'absolute';
  s.style.margin = '0';
  s.style.padding = '10px';
  s.style.border = '1px solid red';
  s.style.backgroundColor = 'red';

  return {
    init: function() {
      //não deixa o quadrado estar em 2 pontos ao mesmo tempo
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 10) + 'px';
      s.style.top = (e.clientY - 10) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  followCursor.init();
  //quando o mouse se mover, executa a função
  document.body.onmousemove = followCursor.run;
}
