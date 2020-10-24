class Ball extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
    };
    display(){

      var pos = this.body.position;

      fill("purple");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.width, this.height);

      super.display();
    }
} 