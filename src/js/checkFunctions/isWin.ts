import { IPlayer } from "../interfaces/playerInterface";
import { IWin } from "../interfaces/winInterface";
import { IStatistics } from "../interfaces/statisticsInterface";

export function isWin(player:IPlayer, win:IWin[], ctx:CanvasRenderingContext2D, level:number, statistics:IStatistics):void {
  for (let i = 0; i < win.length; i++) {
    if (
      player.x + 25 >= win[i].x &&
      player.x - 25 <= win[i].x &&
      player.y == win[i].y
    ) {
      player.c = "white";

      const jan = setInterval(function ():void {
        if (player.w != 0) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          player.w--;
        } else {
          clearInterval(jan);
          statistics.winLevels[level-1] = 1;
          localStorage.setItem("statistics", JSON.stringify(statistics));
          location.href = `#/level-${level+1}`;
        }
      }, 1000 / 60); // 60fps

    } else {
      player.c = "rgb(180,53,60)";
    }
  }
}
