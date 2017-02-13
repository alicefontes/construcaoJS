describe("TheWallTests", function() {

  describe("when created a new brick", function() {
    var params
    var newBrickLayer
    var newBrick
    setFixtures('<div class="wall" id="wall"></div>')
    var currentWall

    beforeEach(function() {
      params = { height: 38, width: 80, left: 70, top: 70 }
      newBrickLayer = new BrickLayer()
      newBrick = newBrickLayer.createBrick(params)
      setFixtures('<div class="wall" id="wall"></div>')
      currentWall = $(".wall")
      newBrickLayer.stamp(newBrick, currentWall)
    });

    it("checks params of the brick created", function() {
      expect(newBrick[0].style.height).toEqual(params.height + "px")
      expect(newBrick[0].style.width).toEqual(params.width + "px")
      expect(newBrick[0].style.left).toEqual(params.left + "px")
      expect(newBrick[0].style.top).toEqual(params.top + "px")
    });

    it("checks new className after stamp", function() {
      expect(newBrick[0].className).toContain("fixedBrick")
    });

    it("checks if currentWall contains newBrick", function() {
      expect(currentWall[0].contains(newBrick[0])).toBe(true)
    });
  });

  describe('when called onReady', function() {
    beforeEach(function() {
      setFixtures('<div id="wall" class="wall"></div>')
      onReady()
    });

    it("checks if a new brick is created when clicking on the wall", function() {
      spyOn(BrickLayer.prototype, 'stamp')
      $("#wall").click()
      expect(BrickLayer.prototype.stamp).toHaveBeenCalled()
    });

    it("checks if a new brick is not created when clicking off the wall", function() {
      spyOn(BrickLayer.prototype, 'stamp')
      $("#aaa").click()
      expect(BrickLayer.prototype.stamp).not.toHaveBeenCalled()
    });
  });

//nao funciona desse jeito pq criei na mão
//tem que fazer um evento de clique em cima do tijolo já existente
  // describe('another brick already stamped', function() {
  //   var anotherBrick
  //
  //   beforeEach(function() {
  //     onReady()
  //
  //     var params = { height: 38, width: 80, left: 70, top: 70 }
  //     var newBrickLayer = new BrickLayer()
  //     var newBrick = newBrickLayer.createBrick(params)
  //     setFixtures('<div class="wall" id="wall"></div>')
  //     var currentWall = $(".wall")
  //     newBrickLayer.stamp(newBrick, currentWall)
  //
  //     var params2 = { height: 38, width: 80 }
  //
  //     // document.elementFromPoint(x, y).click();
  //     var e = new jQuery.Event("click");
  //     e.pageX = 172;
  //     e.pageY = 172;
  //     var anotherBrickLayer = new BrickLayer()
  //     anotherBrick = anotherBrickLayer.createBrick(params2)
  //     $("#wall").trigger(e);
  //   });
  //
  //   // it("checks if a new brick is not created when clicking on another brick", function() {
  //   //   expect(anotherBrick[0].className).not.toContain("fixedBrick")
  //   // });
  // });
});
