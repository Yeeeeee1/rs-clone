import { ISpikes } from "../interfaces/spikesInterface";
import { drawTriangle } from "./drawTriangle";

export function drawSpikes(spikes:ISpikes[], ctx:CanvasRenderingContext2D):void {
  for (let i = 0; i < spikes.length; i++) {
    drawTriangle(spikes[i].x, spikes[i].y, ctx);
  }
}
