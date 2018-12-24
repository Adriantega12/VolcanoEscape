const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

canvas.addEventListener('keydown', (evt) => {
  gm.inputQueue.push(evt.keyCode);
});

window.onload = () => {
  const FPS = 60;

  gm.setup();
  setInterval(gm.mainLoop, 1000 / FPS);
}
