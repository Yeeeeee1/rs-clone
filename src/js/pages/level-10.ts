import { drawWin } from "../drawFunctions/drawWin";
import { drawPlayer } from "../drawFunctions/drawPlayer";
import { draw } from "../drawFunctions/drawWalls";
import { drawSpikes } from "../drawFunctions/drawSpikes";
import { isSpike } from "../checkFunctions/isSpike";
import { isWin } from "../checkFunctions/isWin";
import { isEdge } from "../checkFunctions/isEdge";
import { movePlayer } from "../playerMove/movePlayer";
import { audioPlay } from "../audioFunctions/mainMusic";
import { IPlayer } from "../interfaces/playerInterface";
import { IWin } from "../interfaces/winInterface";
import { ISpikes } from "../interfaces/spikesInterface";
import { IWalls } from "../interfaces/wallsInteraface";
import { IStatistics } from "../interfaces/statisticsInterface";

export const level10 = {
  render: function ():string {
    return `
        <canvas id="canvas"></canvas>
        <div class="overlay">
        <div class="modal">
        <h1>Hello!</h1>

        <h3>MOVEMENT - A(left) D(right) | JUMP - W | ESC - menu</h3>

        <button class="confirm-button">OK</button>
        </div>
        </div>

        <div class="menu-overlay">
        <div class="menu">
        <button id="continue">Continue</button>
        <button onclick="location.href='#/statistic'">Statistic</button>
        <button onclick="location.href='#/start-game'">Main menu</button>
        </div>
        </div>

        <div class="menu-restart-overlay">
        <div class="menu-restart">
        <h3>Game over</h3>
        <h3>You fall on spike!</h3>
        <button onclick="location.reload()">Restart</button>
        <button onclick="location.href='#/statistic'">Statistic</button>
        <button onclick="location.href='#/start-game'">Main menu</button>
        </div>
        </div>

        <div class="controls">
        <img id="larrow" src="${require("../../img/arrow.png")}">
        <img id="rarrow" src="${require("../../img/arrow.png")}">
        <img id="darrow" src="${require("../../img/arrow.png")}">
        <img id="uarrow" src="${require("../../img/arrow.png")}">
        </div>
        <audio src="${require("../../img/player-jump-sound.mp3")}" id="jump-audio"></audio>
        <audio src="${require("../../img/level10s.mp3")}" id="music"></audio>

        <div class="overlay-win">
        <div class="modal-win">
        <h1>You are win!</h1>
        <button onclick="location.href='#/start-game'" class="red-win">Main menu</button>
        </div>
        </div>
        
      `;
  },
  functionality: ():void => {

    

    let level = 10;

    let statistics:IStatistics = {
      lose: 0,
      winLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    

    if (!localStorage.getItem("statistics")) {
      localStorage.setItem("statistics", JSON.stringify(statistics));
    } else {
      statistics = JSON.parse(localStorage.getItem("statistics"));
    }
    

    

    localStorage.setItem("level", `${level}`);

    

    const canvas = <HTMLCanvasElement>document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const continuButton = document.getElementById("continue");

    const menuOverlay = document.querySelector<HTMLElement>(".menu-overlay");

    continuButton.onclick = function () {
      menuOverlay.style.display = "none";
      esc = false;
      update();
    };

    document.onmousedown = function (e: MouseEvent) {
      if ((e.target as Element).id == "rarrow") {
        right = 1;
        update();
      }

      if ((e.target as Element).id == "larrow") {
        left = 1;
        update();
      }

      if ((e.target as Element).id == "darrow") {
        down = 1;
        update();
      }

      if ((e.target as Element).id == "uarrow") {
        up = 1;
        update();
      }
    };

    document.onmouseup = function (e: MouseEvent) {
      if ((e.target as Element).id == "rarrow") {
        right = 0;
      }

      if ((e.target as Element).id == "larrow") {
        left = 0;
      }
      if ((e.target as Element).id == "darrow") {
        down = 0;
      }

      if ((e.target as Element).id == "uarrow") {
        up = 0;
      }
    };

    document.onkeydown = function (e) {
      keyPressed(e);
    };

    document.onkeyup = function (e) {
      keyReleased(e);
    };

    const keyPressed = function (e: KeyboardEvent) {
      if (e.code === "KeyW") {
        up = 1;
      }
      if (e.code === "KeyS") {
        down = 1;
      }
      if (e.code === "KeyA") {
        left = 1;
      }
      if (e.code === "KeyD") {
        right = 1;
      }
      if (e.code === "Escape" && startGame) {
        esc = !esc;
        document.querySelector<HTMLElement>(".menu-overlay").style.display = esc
          ? "block"
          : "none";
        update();
      }
    };

    const keyReleased = function (e: KeyboardEvent) {
      if (e.code === "KeyW") {
        up = 0;
      }
      if (e.code === "KeyS") {
        down = 0;
      }
      if (e.code === "KeyA") {
        left = 0;
      }
      if (e.code === "KeyD") {
        right = 0;
      }
    };

    document.querySelector<HTMLElement>(".confirm-button").onclick = function () {
      document.querySelector<HTMLElement>(".overlay").style.display = "none";
      startGame = true;
      requestAnimationFrame(update);
    };

    const spikes:ISpikes[] = [
        {
            x: 600,
            y: 528,
        },
        {
            x: 800,
            y: 528,
        },
        {
            x: 1300,
            y: 528,
        },
    ];

    const win:IWin[] = [
      {
        x: 1100,
        y: 428,
        w: 50,
        h: 100,
      },
    ];

    const player:IPlayer = {
      x: 0,
      y: 0,
      w: 50,
      h: 100,
      c: "rgb(180,53,60)",
    };

    const walls:IWalls[] = [
      {
        x: 500,
        y: 428,
        w: 100,
        h: 100,
      },
      {
        x: 700,
        y: 328,
        w: 100,
        h: 200,
      },
      {
        x: 900,
        y: 168,
        w: 100,
        h: 400,
      },
      {
        x: 900,
        y: 168,
        w: 300,
        h: 50,
      },
      {
        x: 900,
        y: 0,
        w: 100,
        h: 118,
      },
      {
        x: 0,
        y: canvas.height / 2 + (1015 - screen.height),
        w: 2000,
        h: canvas.height / 2,
      },
      
      {
        x: -700,
        y: -300,
        w: 700,
        h: canvas.height + 300,
      },
      {
        x: 2000,
        y: 0,
        w: 700,
        h: canvas.height,
      },
    ];

    const spd = 5;
    let myReq:undefined;

    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;
    let esc = false;
    let startGame = false;
    let isSpikes = false;

    function update() {
      isEdge(player, left, right, spd, walls, ctx, canvas);

      movePlayer(right, left, spd, down, player, walls, ctx, up);
      drawWin(win, ctx);

      drawPlayer(player, ctx);
      draw(walls, ctx);
      drawSpikes(spikes, ctx);
      isWin(player, win, ctx, level, statistics);
      const isSpikeObj = isSpike(player, spikes);

      isSpikes = isSpikeObj.isSpikes;

      startGame = isSpikeObj.startGame;

      if (isSpikes) {
        statistics.lose++;
        localStorage.setItem("statistics", JSON.stringify(statistics));
      }

      

      if (!esc && !isSpikes) {
        requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(myReq);
      }
    }

    audioPlay();
  },
};
