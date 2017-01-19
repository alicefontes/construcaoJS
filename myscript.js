class Quadradinho {
  constructor(parent) {
    this.parent = parent;
    this.elem = document.createElement('div');
    this.elem.className = 'quadradinho';
    this.elem.style.pointerEvents = "none";
    this.move();
    this.parent.appendChild(this.elem);
    this.boundMove = this.move.bind(this);
    this.parent.addEventListener("mousemove", this.boundMove, false);
  }

  move(e) {
    var e = e || window.event;
    if (e) {
      this.elem.style.left  = (e.clientX) + 'px';
      this.elem.style.top = (e.clientY) + 'px';
    }
  }

  stamp() {
    this.parent.removeEventListener("mousemove", this.boundMove);
    this.elem.style.pointerEvents = "inherit";
    this.elem.addEventListener("click", this.click.bind(this), false);
  }

  click(event) {
    alert("You can't add it here!");
    var e = e || window.event;
    if (e) {
      e.stopPropagation();
    }
  }
}

var currentDiv = document.getElementById("div1");
var currentCursor = new Quadradinho(currentDiv);

var criaQuadradinho = function() {
  currentCursor.stamp();
  currentCursor = new Quadradinho(currentDiv);
}

currentDiv.addEventListener("click", criaQuadradinho, false);
