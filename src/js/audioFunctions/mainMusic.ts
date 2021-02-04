export function audioPlay():void {
  const audio = document.querySelector<HTMLAudioElement>("#music");
  audio.volume = JSON.parse(localStorage.getItem("setting")).volumeMusic / 100;
  audio.autoplay = true;
  audio.play();
}
