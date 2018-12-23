class GameManager {
  constructor() {
    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.mainLoop = this.mainLoop.bind(this);
  }

  setup() {

  }

  update() {

  }

  render() {

  }

  mainLoop() {
    this.update();
    this.render();
  }
}

const gm = new GameManager();

const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

window.onload = () => {
  const FPS = 60;

  gm.setup();
  setInterval(gm.mainLoop, 1000/FPS);
}

class Player {

}
