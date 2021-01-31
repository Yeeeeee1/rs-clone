import { IPlayer } from "../interfaces/playerInterface";

export function drawPlayer(player:IPlayer, ctx:CanvasRenderingContext2D):void {
  ctx.fillStyle = player.c;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
