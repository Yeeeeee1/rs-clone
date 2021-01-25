export function drawWin(win, ctx) {
  for (let i = 0; i < win.length; i++) {
    ctx.strokeStyle = "white";
    ctx.strokeRect(win[i].x, win[i].y, win[i].w, win[i].h);
  }
}
