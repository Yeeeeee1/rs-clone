export function drawPlayer(player, ctx) {
  ctx.fillStyle = player.c;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
