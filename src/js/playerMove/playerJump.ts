import { placeFree } from "../checkFunctions/placeFree";
import { IPlayer } from "../interfaces/playerInterface";
import { IWalls } from "../interfaces/wallsInteraface";

export function playerJump(jump:number, up:number, player:IPlayer, walls:IWalls[], ctx:CanvasRenderingContext2D):number {
  for (let j = jump; j > 0; j--) {
    if (up && placeFree(player.x, player.y - j, player, walls)) {
      ctx.clearRect(player.x, player.y, player.w, player.h);
      player.y -= j;

      break;
    }
  }
  
    const audio = document.querySelector<HTMLAudioElement>("#jump-audio");
    audio.play();
    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
    }, 400);

  //Stop jumping if the player lets go of the button
  if (!up) {
    jump = 0;
  }

  //Slowly decrease jump speed but don't go below 0
  jump = Math.max(jump - 1, 0);

  return jump;
}
