import { IWalls } from "../interfaces/wallsInteraface";

export function draw(thing: IWalls[], ctx: CanvasRenderingContext2D):void {
  for (let i = 0; i < thing.length; i++) {
    ctx.fillStyle = "rgb(13,12,13)";
    ctx.fillRect(thing[i].x, thing[i].y, thing[i].w, thing[i].h);
  }
}
