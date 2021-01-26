import arrow from "../../img/arrow.png";
import { drawWin } from "../drawFunctions/drawWin";
import { drawPlayer } from "../drawFunctions/drawPlayer";
import { draw } from "../drawFunctions/drawWalls";
import { drawSpikes } from "../drawFunctions/drawSpikes";
import { isSpike } from "../checkFunctions/isSpike";
import { isWin } from "../checkFunctions/isWin";
import { collision } from "../checkFunctions/collision";
import { isEdge } from "../checkFunctions/isEdge";
import { movePlayer } from "../playerMove/movePlayer";

export const level1 = {
  render: function () {
    return `
        <canvas id="canvas"></canvas>
        <div class="overlay">
        <div class="modal">
        <h1>Hello!</h1>

        <h3>MOVEMENT - A(left) D(right) | ESC - menu</h3>

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
        <img id="larrow" src="${arrow}">
        <img id="rarrow" src="${arrow}">
        <img id="darrow" src="${arrow}">
        <img id="uarrow" src="${arrow}">
        </div>
      `;
  },
  functionality: () => {
    let canvas = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext("2d");

    let continuButton = document.getElementById("continue");

    continuButton.onclick = function () {
      document.querySelector(".menu-overlay").style.display = "none";
      esc = false;
      update();
    };

    document.onmousedown = function (e) {
      if (e.target.id == "rarrow") {
        right = 1;
      }

      if (e.target.id == "larrow") {
        left = 1;
      }

      if (e.target.id == "darrow") {
        right = 1;
      }

      if (e.target.id == "uarrow") {
        left = 1;
      }
    };

    document.onmouseup = function (e) {
      if (e.target.id == "rarrow") {
        right = 0;
      }

      if (e.target.id == "larrow") {
        left = 0;
      }
    };

    document.onkeydown = function (e) {
      keyPressed(e);
    };

    document.onkeyup = function (e) {
      keyReleased(e);
    };

    var keyPressed = function (e) {
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
        document.querySelector(".menu-overlay").style.display = esc
          ? "block"
          : "none";
        update();
      }
    };

    var keyReleased = function (e) {
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

    document.querySelector(".confirm-button").onclick = function () {
      document.querySelector(".overlay").style.display = "none";
      startGame = true;
      requestAnimationFrame(update);
    };

    let spikes = [
      {
        x: 600,
        y: 528,
      },
    ];

    let win = [
      {
        x: 450,
        y: 428,
        w: 50,
        h: 100,
      },
    ];

    let player = {
      x: 0,
      y: 0,
      w: 50,
      h: 100,
      c: "rgb(180,53,60)",
    };

    let walls = [
      {
        x: 250,
        y: 450,
        w: 100,
        h: 100,
      },
      {
        x: 0,
        y: canvas.height - canvas.height / 2,
        w: 2000,
        h: canvas.height / 2,
      },
      {
        x: 100,
        y: 0,
        w: 100,
        h: 200,
      },
      {
        x: 250,
        y: 300,
        w: 100,
        h: 100,
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

    let spd = 5;
    let myReq;

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
      isWin(player, win, ctx);
      let isSpikeObj = isSpike(player, spikes, ctx);

      isSpikes = isSpikeObj.isSpikes;

      startGame = isSpikeObj.startGame;

      if (!esc && !isSpikes) {
        requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(myReq);
      }
    }
  },
};
