import { drawTriangle } from "./drawTriangle";

export function drawSpikes(spikes, ctx) {
  for (let i = 0; i < spikes.length; i++) {
    drawTriangle(spikes[i].x, spikes[i].y, ctx);
  }
}
