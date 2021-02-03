import { placeFree } from "../checkFunctions/placeFree";
import { IPlayer } from "../interfaces/playerInterface";
import { IWalls } from "../interfaces/wallsInteraface";

const gravity = 4;

export function playerFall(player:IPlayer, ctx:CanvasRenderingContext2D, walls:IWalls[]):void {
  for (let i = gravity; i > 0; i--) {
    if (placeFree(player.x, player.y + i, player, walls)) {
      ctx.clearRect(player.x, player.y, player.w, player.h);
      player.y += i;
      break;
    }
  }
}
