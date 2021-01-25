export function draw(thing, ctx) {
  for (let i = 0; i < thing.length; i++) {
    ctx.fillStyle = "rgb(13,12,13)";
    ctx.fillRect(thing[i].x, thing[i].y, thing[i].w, thing[i].h);
  }
}
