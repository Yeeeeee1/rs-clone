import arrow from "../../img/arrow.png";
import { router } from "../router/router";

export const level1 = {
  text: "MOVEMENT - A(left) D(right) | ESC - menu",
    render: function () {
      return `
        <canvas id="canvas"></canvas>
        <div class="overlay">
        <div class="modal">
        <h1>Hello!</h1>

        <h3>${this.text}</h3>

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

        <div class="controls">
        <img id="larrow" src="${arrow}">
        <img id="rarrow" src="${arrow}">
        <img id="darrow" src="${arrow}">
        </div>
      `;
    },
    functionality: () => {

      let canvas = document.getElementById("canvas");

      let ctx = canvas.getContext("2d");

      let continuButton = document.getElementById("continue");

      continuButton.onclick = function () {
          document.querySelector(".menu-overlay").style.display = "none";
        esc = false;
        update();
        
        
      }

      

      


      canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

           

            document.onmousedown = function (e) {
              if (e.target.id == "rarrow") {
                right = 1;
              }

              if (e.target.id == "larrow") {
                left = 1;
              }
            }

            document.onmouseup = function (e) {
              if (e.target.id == "rarrow") {
                right = 0;
              }

              if (e.target.id == "larrow") {
                left = 0;
              }
            }

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
      }

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
          x: -10,
          y: 0,
          w: 10,
          h: canvas.height,
        },
        {
          x: 2010,
          y: 0,
          w: 10,
          h: canvas.height,
        }
      ];

      let spd = 4;
      let gravity = 4;
      let jumpHeight = 24; //Change this number however you would like
      let jump = 0;
      let isDown = false;
      let myReq;

      document.onkeydown = function (e) {
        keyPressed(e);
      }

      document.onkeyup = function (e) {
        keyReleased(e);
      }

      let up = 0;
      let down = 0;
      let left = 0;
      let right = 0;
      let esc = false;
      let startGame = false;

      var keyPressed = function(e) {
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
          document.querySelector(".menu-overlay").style.display = esc ? "block" : "none";
          update();
        }
      };
      
      var keyReleased = function(e) {
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

       function collision(r1, r2) {
        if (r1.x + r1.w > r2.x &&
            r1.x < r2.x + r2.w &&
            r2.y + r2.h > r1.y &&
            r2.y < r1.y + r1.h) {
              
              return true;
        } else {
          return false;
        }
      };

      draw(player, "red");
      draw(walls[0], "green");

      let cof = 0;

      function draw(thing) {
        for (let i = 0; i < thing.length; i++) {
          ctx.fillStyle = "rgb(13,12,13)";
          ctx.fillRect(thing[i].x, thing[i].y, thing[i].w, thing[i].h);
        }
      }

      function drawPlayer() {
        ctx.fillStyle = player.c;
        ctx.fillRect(player.x, player.y, player.w, player.h);
      }

      function update () {

        if (player.x + player.w >= canvas.width + cof && right && player.x + player.w + spd <= 2000) {
          cof += 10;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.translate(-10, 0);
          ctx.clearRect(0, 0, canvas.width + cof, canvas.height);
        }

        if (player.x - cof <= 0 && left) {
          cof -= 10;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.translate(10, 0);
          ctx.clearRect(0, 0, canvas.width - canvas.width + cof, canvas.height);
        }
        
        movePlayer();
        drawWin();
        
        drawPlayer();
        draw(walls);
        isWin();
        

        if (!esc) {
          requestAnimationFrame(update);
        } else {
          cancelAnimationFrame(myReq);
        }

        
        
      }


      function drawWin() {
        for (let i = 0; i < win.length; i++) {
          ctx.strokeStyle = 'white';
          ctx.strokeRect(win[i].x, win[i].y, win[i].w, win[i].h);
        }
      }

      function isWin() {
        for (let i = 0; i < win.length; i++) {
          if (player.x + 25 >= win[i].x && player.x - 25 <= win[i].x && player.y == win[i].y) {
            player.c = "white";
            
          } else {
            player.c = "rgb(180,53,60)";
          }
        }
      }
      

      function placeFree(xNew, yNew) {
        let temp = { x: xNew, y: yNew, w: player.w, h: player.h};

        for (let i = 0; i < walls.length; i++) {
          if (collision(temp, walls[i])) {
            return false;
          }
        }

        return true;
      }  
      
      let sKeyUp = true;

      function movePlayer() {
        let dir = right - left;

        for (let s = spd; s > 0; s--) {
          if (placeFree(player.x + s * dir, player.y)) {
            ctx.clearRect(player.x, player.y, player.w, player.h);
            player.x += s * dir;
            break;
          }
        }

        

        if (down) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          player.h = 50;
          if (sKeyUp) {
            player.y += 50;
            sKeyUp = false;
          }
          isDown = true;
          
        } else if (isDown && !placeFree(player.x, player.y+1) && placeFree(player.x, player.y-1)) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          isDown = false;
          sKeyUp = true;
          player.h = 100;
          
          player.y -= 50;
          
        } else if (!down && !placeFree(player.x, player.y-1)) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          player.h = 50;
        }  else if (placeFree(player.x, player.y+1) && !down) {
          player.h = 100;
        }

        
        //If you are on the ground and you press up, set
  //jump to jumpHeight
  if (!placeFree(player.x, player.y+1) && up) {
    jump = jumpHeight;
    
  }

        if (jump > 0) {
          playerJump();
        } else {
          playerFall();
        }
      }

      function playerFall() {
        for (var i = gravity; i > 0; i--) {
          if (placeFree(player.x, player.y + i)) {
            ctx.clearRect(player.x, player.y, player.w, player.h);
             player.y += i;
             break;
          }
       }
      }

      function playerJump() {
        for (var j = jump; j > 0; j--) {
        if (up && placeFree(player.x, player.y - j)) {
          ctx.clearRect(player.x, player.y, player.w, player.h);
          player.y -= j;
          
          break;
        }
      }

      //Stop jumping if the player lets go of the button
  if (!up) {
    jump = 0;
  }

  //Slowly decrease jump speed but don't go below 0
  jump = Math.max(jump-1,0);
      }

      

      /*modal("MOVEMENT - A(left) D(right) | JUMP - W | ESC - exit");

      function modal(text) {
        document.body.innerHTML += `
        <div class="overlay">
        <div class="modal">
        <h1>Hello!</h1>

        <h3>${text}</h3>

        <button class="confirm-button">OK</button>
        </div>
        </div>
        `;
      }*/

      document.querySelector(".confirm-button").onclick = function () {
        document.querySelector(".overlay").style.display = "none";
        startGame = true;
        requestAnimationFrame(update);
        
      };

      

      

    }


  }
  