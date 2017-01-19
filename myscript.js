class Brick {
  constructor(parent) {
    this.parent = parent;
    this.elem = document.createElement('div');
    this.elem.className = 'brick';
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
var currentCursor = new Brick(currentDiv);

var createBrick = function() {
  currentCursor.stamp();
  currentCursor = new Brick(currentDiv);
}

currentDiv.addEventListener("click", createBrick, false);
