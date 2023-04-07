interface Paint{
    drawpoint():void;
}

interface Paint2D{
    draw2DImage():void;
}

class Circle implements Paint, Paint2D{
    draw2DImage(): void {
        console.log("drawing 2D Imaging")
    }
    drawpoint(): void {
        console.log("drawing line.")
    }
}

var cir=new Circle();
cir.drawpoint();
cir.draw2DImage();