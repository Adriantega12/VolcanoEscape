class Graphics {
  static drawLine(startX, startY, endX, endY, color) {
    canvasContext.strokeStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
    canvasContext.lineTo(endX, endY);
    canvasContext.stroke();
  }

  static drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
  }

  static drawCircle(centerX, centerY, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  }

  static drawText(string, x, y, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(string, x, y);
  }
}
