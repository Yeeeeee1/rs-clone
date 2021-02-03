import { IWalls } from "../interfaces/wallsInteraface";

export function collision(r1:IWalls, r2:IWalls):boolean {
  if (
    r1.x + r1.w > r2.x &&
    r1.x < r2.x + r2.w &&
    r2.y + r2.h > r1.y &&
    r2.y < r1.y + r1.h
  ) {
    return true;
  } else {
    return false;
  }
}
