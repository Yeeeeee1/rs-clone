export function isSpike(player, spikes) {
  for (let i = 0; i < spikes.length; i++) {
    if (
      player.x + 50 >= spikes[i].x &&
      player.x - 100 <= spikes[i].x &&
      player.y >= spikes[i].y - 200
    ) {
      document.querySelector(".menu-restart-overlay").style.display = "block";
      document.querySelector(".menu-restart").style.display = "block";
      return {
        isSpikes: true,
        startGame: false,
      };
    }
  }

  return {
    isSpikes: false,
    startGame: false,
  };
}
