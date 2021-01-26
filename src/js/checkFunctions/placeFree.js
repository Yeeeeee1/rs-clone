import { collision } from "./collision";

export function placeFree(xNew, yNew, player, walls) {
  let temp = { x: xNew, y: yNew, w: player.w, h: player.h };

  for (let i = 0; i < walls.length; i++) {
    if (collision(temp, walls[i])) {
      return false;
    }
  }

  return true;
}
