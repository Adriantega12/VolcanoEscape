const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

let playerX = 0;
let playerY = 0;

canvas.addEventListener('keydown', (evt) => {
  const W = 87;
  const A = 65;
  const S = 83;
  const D = 68;

  if (evt.keyCode === W) {
    playerX++;
  }

  console.log(playerX);
});

window.onload = () => {
  const FPS = 60;
  setInterval(gameLoop, 1000/FPS);
}

function gameLoop() {
  update();
  render();
}

function update() {

}

function render() {
  // BG
  colorRect(0, 0, canvas.width, canvas.height, 'black');

  colorRect(playerX, 0, 10, 10, 'white');
}

function colorRect( topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect( topLeftX, topLeftY, boxWidth, boxHeight );
  }
