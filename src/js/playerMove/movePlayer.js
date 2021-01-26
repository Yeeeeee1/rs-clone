import { placeFree } from "../checkFunctions/placeFree";
import { playerFall } from "../playerMove/playerFall";
import { playerJump } from "../playerMove/playerJump";
import { playerDown } from "../playerMove/playerDown";

let jumpHeight = 24;
let jump = 0;

export function movePlayer(right, left, spd, down, player, walls, ctx, up) {
  let dir = right - left;

  for (let s = spd; s > 0; s--) {
    if (placeFree(player.x + s * dir, player.y, player, walls)) {
      ctx.clearRect(player.x, player.y, player.w, player.h);
      player.x += s * dir;
      break;
    }
  }

  playerDown(down, player, walls, ctx);

  //If you are on the ground and you press up, set
  //jump to jumpHeight
  if (!placeFree(player.x, player.y + 1, player, walls) && up) {
    jump = jumpHeight;
  }

  if (jump > 0) {
    jump = playerJump(jump, up, player, walls, ctx);
  } else {
    playerFall(player, ctx, walls);
  }
}
