function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('msg').innerHTML = e.clientX + ', ' + e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}

var s = document.createElement('div');
s.id = 'quadradinho';

var followCursor = (function() {
  s.style.position = 'absolute';
  s.style.margin = '0';
  s.style.padding = '10px';
  s.style.border = '1px solid red';
  s.style.backgroundColor = 'red';

  return {
    init: function() {
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

function startBuilding() {
  followCursor.init();
  document.addEventListener("mousemove", followCursor.run, false);
  document.getElementById('quadradinho').addEventListener("click", stopBuilding, false);
}

function stopBuilding() {
  document.removeEventListener("mousemove", followCursor.run, false);
}
