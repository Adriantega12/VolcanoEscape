class Player extends GameObject {
  constructor() {
    super();
    this.rigidBody = new PhysicsComponent(250, 0);
    this.isRunning = false;
  }

  handleInput(keyCode) {
    const W = 87;
    const A = 65;
    const S = 83;
    const D = 68;
  }

  update() {
    this.rigidBody.update();
  }

  render() {
    Graphics.drawRect(this.rigidBody.x, this.rigidBody.y, 50, 80, 'white');
  }
}
