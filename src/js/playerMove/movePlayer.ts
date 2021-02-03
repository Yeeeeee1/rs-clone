import { placeFree } from "../checkFunctions/placeFree";
import { playerFall } from "./playerFall";
import { playerJump } from "./playerJump";
import { playerDown } from "./playerDown";
import { IPlayer } from "../interfaces/playerInterface";
import { IWalls } from "../interfaces/wallsInteraface";

const jumpHeight = 24;
let jump = 0;

export function movePlayer(right:number, left:number, spd:number, down:number, player:IPlayer, walls:IWalls[], ctx:CanvasRenderingContext2D, up:number):void {
  const dir = right - left;

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
