class Quadradinho {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.id = 'quadradinho';
    this.elem.style.position = 'absolute';
    this.elem.style.padding = '10px';
    this.elem.style.border = '1px solid white';
    this.elem.style.backgroundColor = 'white';
  }

  move(e) {
    var e = e || window.event;
    this.elem.style.left  = (e.clientX) + 'px';
    this.elem.style.top = (e.clientY) + 'px';
  }
}

var currentCursor = null;
var currentDiv = document.getElementById("div1");

document.getElementById("div1").addEventListener("mousemove", startBuilding, false);

function startBuilding() {
  currentCursor = new Quadradinho();
  document.body.appendChild(currentCursor.elem);
  var callback = currentCursor.move.bind(currentCursor);
  currentDiv.addEventListener("mousemove", callback, false);

  function stopBuilding() {
    currentDiv.removeEventListener("mousemove", callback, false);
  }

  currentCursor.elem.addEventListener("click", stopBuilding, false);
}

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
