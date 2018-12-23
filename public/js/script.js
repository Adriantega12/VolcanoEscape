class GameManager {

}

const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

window.onload = () => {
  const FPS = 60;
  setInterval(gameLoop, 1000/FPS);
}

class Player {

}
