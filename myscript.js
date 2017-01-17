class Quadradinho {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.id = 'quadradinho';
    this.elem.style.position = 'absolute';
    this.elem.style.padding = '10px';
    this.elem.style.border = '1px solid white';
    this.elem.style.backgroundColor = 'white';
    // this.elem.style.left = 10 + 'px';
    // this.elem.style.top = 10 + 'px';
  }

  move(e) {
    var e = e || window.event;
    this.elem.style.left  = (e.clientX ) + 'px';
    this.elem.style.top = (e.clientY ) + 'px';
  }
}

function startBuilding(e) {
  currentCursor = new Quadradinho();
  document.body.appendChild(currentCursor.elem);
  var callback = currentCursor.move.bind(currentCursor);
  currentDiv.addEventListener("mousemove", callback, false);

  function stopBuilding(e) {
    var cx2 = e.clientX;
    var cy2 = e.clientY;
    if ( (cx == cx2-5) || (cy == cy2-5) ) {
      alert("You cant add it here");
    }
    else {
      currentDiv.removeEventListener("mousemove", callback, false);
    }
    // currentDiv.removeEventListener("mousemove", callback, false);
  }
  currentCursor.elem.addEventListener("click", stopBuilding, false);
  var cx = e.clientX;
  var cy = e.clientY;
}

var currentCursor = null;
var currentDiv = document.getElementById("div1");

document.getElementById("div1").addEventListener("mousemove", startBuilding, false);

// function startDragging() {
//   currentCursor = new Quadradinho();
//   document.body.appendChild(currentCursor.elem);
//   var callback = currentCursor.move.bind(currentCursor);
//   currentDiv.addEventListener("mousemove", callback, false);
//
//   function printSquares() {
//
//   }
//
//   currentDiv.addEventListener("drag", printSquares, false);
//
//   function stopBuilding() {
//     currentDiv.removeEventListener("mousemove", callback, false);
//   }
//
//   currentCursor.elem.addEventListener("mouseup", stopBuilding, false);
// }
