import { collision } from "./collision";
import { IPlayer } from "../interfaces/playerInterface";
import { IWalls } from "../interfaces/wallsInteraface";

export function placeFree(xNew:number, yNew:number, player:IPlayer, walls:IWalls[]):boolean {
  const temp = { x: xNew, y: yNew, w: player.w, h: player.h };

  for (let i = 0; i < walls.length; i++) {
    if (collision(temp, walls[i])) {
      return false;
    }
  }

  return true;
}
