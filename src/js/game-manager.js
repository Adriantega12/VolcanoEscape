class GameManager {
  constructor() {
    this.inputQueue = [];

    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.mainLoop = this.mainLoop.bind(this);
  }

  setup() {
    this.player = new Player();
  }

  handleInput() {
    while (this.inputQueue.length > 0) {
      this.player.handleInput(this.inputQueue.shift());
    }
  }

  update() {
    this.player.update();
  }

  render() {
    // Render background
    Graphics.drawRect(0, 0, canvas.width, canvas.height, 'black');

    this.player.render();
  }

  mainLoop() {
    if (this.inputQueue.length > 0) {
      this.handleInput();
    }
    this.update();
    this.render();
  }
}

const gm = new GameManager();
