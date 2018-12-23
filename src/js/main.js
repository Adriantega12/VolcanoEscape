const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

window.onload = () => {
  const FPS = 60;

  gm.setup();
  setInterval(gm.mainLoop, 1000 / FPS);
}
