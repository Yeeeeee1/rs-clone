import { IWin } from "../interfaces/winInterface";

export function drawWin(win:IWin[], ctx:CanvasRenderingContext2D):void {
  for (let i = 0; i < win.length; i++) {
    ctx.strokeStyle = "white";
    ctx.strokeRect(win[i].x, win[i].y, win[i].w, win[i].h);
  }
}
