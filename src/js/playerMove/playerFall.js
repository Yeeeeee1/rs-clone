import { placeFree } from "../checkFunctions/placeFree";

let gravity = 4;

export function playerFall(player, ctx, walls) {
  for (var i = gravity; i > 0; i--) {
    if (placeFree(player.x, player.y + i, player, walls)) {
      ctx.clearRect(player.x, player.y, player.w, player.h);
      player.y += i;
      break;
    }
  }
}
