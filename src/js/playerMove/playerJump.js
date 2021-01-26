import { placeFree } from "../checkFunctions/placeFree";

export function playerJump(jump, up, player, walls, ctx) {
  for (var j = jump; j > 0; j--) {
    if (up && placeFree(player.x, player.y - j, player, walls)) {
      ctx.clearRect(player.x, player.y, player.w, player.h);
      player.y -= j;

      break;
    }
  }

  //Stop jumping if the player lets go of the button
  if (!up) {
    jump = 0;
  }

  //Slowly decrease jump speed but don't go below 0
  jump = Math.max(jump - 1, 0);

  return jump;
}
