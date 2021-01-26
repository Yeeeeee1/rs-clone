import { placeFree } from "../checkFunctions/placeFree";

let isDown = false;
let sKeyUp = true;

export function playerDown(down, player, walls, ctx) {
  if (down) {
    ctx.clearRect(player.x, player.y, player.w, player.h);
    //player.h = 50;
    if (sKeyUp) {
      //player.y += 50;
      sKeyUp = false;
    }
    isDown = true;

    function downAnimation() {
      if (player.h != 50) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.h -= 2;
      } else {
        clearInterval(dan);
      }
    }

    let dan = setInterval(downAnimation, 1000 / 60); // 60fps
  } else if (
    isDown &&
    !placeFree(player.x, player.y + 1, player, walls) &&
    placeFree(player.x, player.y - 1, player, walls)
  ) {
    ctx.clearRect(player.x, player.y, player.w, player.h);

    sKeyUp = true;
    /*player.h = 100;
        
        player.y -= 50;*/

    function upAnimation() {
      if (player.h != 100) {
        ctx.clearRect(player.x, player.y, player.w, player.h);
        player.h += 2;
        player.y -= 2;
      } else {
        clearInterval(uan);
        isDown = false;
      }
    }

    let uan = setInterval(upAnimation, 1000 / 60); // 60fps
  } else if (!down && !placeFree(player.x, player.y - 1, player, walls)) {
    ctx.clearRect(player.x, player.y, player.w, player.h);
    player.h = 50;
  } else if (placeFree(player.x, player.y + 1, player, walls) && !down) {
    player.h = 100;
  }
}
