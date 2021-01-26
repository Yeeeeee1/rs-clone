import { placeFree } from "./placeFree";

let cof = 0;

export function isEdge(player, left, right, spd, walls, ctx, canvas) {
  if (
    player.x + player.w >= canvas.width / 2 + cof &&
    right &&
    player.x + player.w <= 2000
  ) {
    cof += 10;
    let dir = right - left;

    for (let s = spd; s > 0; s--) {
      if (placeFree(player.x + s * dir, player.y, player, walls)) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.x += s * dir;
        break;
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(-10, 0);

    ctx.clearRect(0, 0, canvas.width + cof, canvas.height);
    ctx.beginPath();
  } else if (player.x - cof <= canvas.width / 2 && left) {
    cof -= 10;
    let dir = right - left;

    for (let s = spd; s > 0; s--) {
      if (placeFree(player.x + s * dir, player.y, player, walls)) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.x += s * dir;
        break;
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(10, 0);
    ctx.clearRect(0, 0, canvas.width + cof, canvas.height);
    ctx.beginPath();
  } else {
    let dir = right - left;
    for (let s = spd; s > 0; s--) {
      if (placeFree(player.x + s * dir, player.y, player, walls)) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.x += s * dir;
        break;
      }
    }
  }
}
