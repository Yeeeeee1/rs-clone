export function audioPlay(music:string):void {
  const audio = new Audio(music);
  audio.volume = 0;
  audio.play();
}
