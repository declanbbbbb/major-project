class Point {
  constructor(pointX, pointY, mass) {
    this.pos = createVector(pointX, pointY);
    this.mass = mass;

    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  display() {
    charStroke(1);
    charFill(0.5);
    charCircle(this.pos.x, this.pos.y, 20);
  }

  applyForce(force) {
    let before = this.pos.copy();
    this.acceleration = p5.Vector.div(force, this.mass);
    this.velocity.add(p5.Vector.mult(this.acceleration, timeScale));
    this.pos.add(p5.Vector.mult(this.velocity, timeScale));

    // console.log("force applied", this.pos);
    // this.display();
  }
}