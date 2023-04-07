var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("drawing 2D Imaging");
    };
    Circle.prototype.drawpoint = function () {
        console.log("drawing line.");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawpoint();
cir.draw2DImage();
