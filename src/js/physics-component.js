const GRAVITY = 1;
const MAX_X = 10;
const MAX_Y = 50;

class PhysicsComponent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = 0;
    this.velY = 0;
    this.accelX = 0;
    this.accelY = GRAVITY;
  }

  update() {
    if (Math.abs(this.velX) < MAX_X) {
      this.velX += this.accelX;
    }
    if (Math.abs(this.velY) < MAX_Y) {
      this.velY += this.accelY;
    }

    this.x += this.velX;
    this.y += this.velY;
    console.log(this.velY);
  }
}
