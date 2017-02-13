describe("TheWallTests", function() {

  describe("when created a new brick", function() {
    var params
    var newBrickLayer
    var newBrick
    var currentWall

    beforeEach(function() {
      setFixtures('<div class="wall" id="wall"></div>')
      onReady()
      params = { height: 38, width: 80, left: 70, top: 70 }
      newBrickLayer = new BrickLayer()
      newBrick = newBrickLayer.createBrick(params)
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

    it("checks if a new brick is not created when clicking on another brick", function() {
      spyOn(BrickLayer.prototype, 'stamp')
      var event2 = new jQuery.Event('click');
      event2.pageX = 77;
      event2.pageY = 77;
      $(document).trigger(event2);
      expect(BrickLayer.prototype.stamp).not.toHaveBeenCalled()
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
});
