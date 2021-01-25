export function isWin(player, win, ctx) {
  for (let i = 0; i < win.length; i++) {
    if (
      player.x + 25 >= win[i].x &&
      player.x - 25 <= win[i].x &&
      player.y == win[i].y
    ) {
      player.c = "white";
      function jumpAnimation() {
        if (player.w != 0) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          player.w--;
        } else {
          clearInterval(jan);
          location.href = "#/level-2";
        }
      }
      let jan = setInterval(jumpAnimation, 1000 / 60); // 60fps
    } else {
      player.c = "rgb(180,53,60)";
    }
  }
}
