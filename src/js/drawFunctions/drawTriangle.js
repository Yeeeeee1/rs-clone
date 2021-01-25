export function drawTriangle(x, y, ctx) {
  ctx.fillStyle = "rgb(13, 12, 13)";
  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y);
  ctx.lineTo(x + 50, y - 100);
  ctx.lineTo(x, y);
  ctx.fill();
}
