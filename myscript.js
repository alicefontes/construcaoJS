
class Quadradinho {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.id = 'quadradinho';
    this.elem.style.position = 'absolute';
    this.elem.style.margin = '0';
    this.elem.style.padding = '10px';
    this.elem.style.border = '1px solid red';
    this.elem.style.backgroundColor = 'red';
  }

  move(e) {
    var e = e || window.event;
    this.elem.style.left  = (e.clientX - 10) + 'px';
    this.elem.style.top = (e.clientY - 10) + 'px';
    document.getElementById('msg').innerHTML = e.clientX + ', ' + e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
}


var currentCursor = null;


// var currentDiv = document.getElementById("div1");
// var sqr = document.getElementById('quadradinho');

function startBuilding() {
  currentCursor = new Quadradinho();
  document.body.appendChild(currentCursor.elem);
  var callback = currentCursor.move.bind(currentCursor)
  document.addEventListener("mousemove", callback, false);

  function stopBuilding() {
    document.removeEventListener("mousemove", callback, false);
    // currentDiv.removeEventListener("mousemove", followCursor.run, false);
  }

  currentCursor.elem.addEventListener("click", stopBuilding, false);
  // currentDiv.addEventListener("mousemove", followCursor.run, false);
  // sqr.addEventListener("click", stopBuilding, false);
}
