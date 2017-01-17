class Quadradinho {
  constructor(parent) {
    this.parent = parent
    this.elem = document.createElement('div');
    this.elem.class = 'quadradinho';
    this.elem.style.position = 'absolute';
    this.elem.style.padding = '10px';
    this.elem.style.border = '1px solid white';
    this.elem.style.backgroundColor = 'white';
    this.move();
    parent.appendChild(this.elem);
    this.boundMove = this.move.bind(this);
    parent.addEventListener("mousemove", this.boundMove, false);
    this.boundStopBuilding = this.stopBuilding.bind(this);
    parent.addEventListener("click", this.boundStopBuilding);
  }

  move(e) {
    var e = e || window.event;
    if (e) {
      this.elem.style.left  = (e.clientX ) + 'px';
      this.elem.style.top = (e.clientY ) + 'px';
    }
  }

  stopBuilding(e) {
    var cx = this.elem.offsetLeft;
    var cy = this.elem.offsetTop;
    var cx2 = e.clientX;
    var cy2 = e.clientY;
    console.log(cx, cy, cx2, cy2);
    console.log(e.target, this.elem);
    console.log(e.target != this.elem)
    if ( e.target != this.elem && (Math.abs(cx-cx2)<=10 || Math.abs(cy-cy2)<=10) ) {
      alert("You cant add it here");
    }
    else {
      this.parent.removeEventListener("mousemove", this.boundMove);
      this.parent.removeEventListener("click", this.boundStopBuilding);
      currentCursor = new Quadradinho(currentDiv);
    }
  }
}

var currentDiv = document.getElementById("div1");
var currentCursor = new Quadradinho(currentDiv);

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
