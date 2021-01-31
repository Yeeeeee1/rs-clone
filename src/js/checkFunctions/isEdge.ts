import { placeFree } from "./placeFree";
import { IPlayer } from "../interfaces/playerInterface";
import { IWalls } from "../interfaces/wallsInteraface";

let cof = 0;

export function isEdge(player:IPlayer, left:number, right:number, spd:number, walls:IWalls[], ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement):void {
  if (
    player.x + player.w >= canvas.width / 2 + cof &&
    right &&
    player.x + player.w <= 2000
  ) {
    cof += 10;
    const dir = right - left;

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
    const dir = right - left;

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
    const dir = right - left;
    for (let s = spd; s > 0; s--) {
      if (placeFree(player.x + s * dir, player.y, player, walls)) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.x += s * dir;
        break;
      }
    }
  }
}
