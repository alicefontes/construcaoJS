describe("TheWallTests", function() {
  describe("when creating a new brick", function() {
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

    describe("first checks", function(){
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

    describe("when clicking on another brick", function() {
      it("checks if a new brick is not created", function() {
        spyOn(BrickLayer.prototype, 'stamp')
        // BrickLayer.prototype.stamp = jasmine.createSpy()
        newBrick.click();
        expect(BrickLayer.prototype.stamp).not.toHaveBeenCalled()
      });

      it("checks if a new brick is created", function() {
        spyOn(BrickLayer.prototype, 'stamp')
        $("#wall").click();
        expect(BrickLayer.prototype.stamp).toHaveBeenCalled()
      });
    });

    describe("when clicking on the wall", function() {
      it("checks if a new brick is created", function() {
        spyOn(BrickLayer.prototype, 'stamp')
        $("#wall").click()
        expect(BrickLayer.prototype.stamp).toHaveBeenCalled()
      });
    });

    describe("when clicking off the wall", function() {
      it("checks if a new brick is not created", function() {
        spyOn(BrickLayer.prototype, 'stamp')
        $("body").click()
        expect(BrickLayer.prototype.stamp).not.toHaveBeenCalled()
      });
    });
  });
});
