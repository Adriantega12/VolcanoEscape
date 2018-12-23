class GameManager {
  constructor() {
    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.mainLoop = this.mainLoop.bind(this);
  }

  setup() {
    this.player = new Player();
  }

  update() {

  }

  render() {
    // Render background
    Graphics.drawRect(0, 0, canvas.width, canvas.height, 'black');

    this.player.render();
  }

  mainLoop() {
    this.update();
    this.render();
  }
}

const gm = new GameManager();
