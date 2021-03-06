/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */

// import classes
import Ball from './js/ball.js';
import Brick from './js/bricks.js';
import Paddle from './js/paddle.js';
// canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// create bricks
const bricksColumnCount = 5;
const bricksRowCount = 3;
const bricks = [];
function createBricks() {
  for (let c = 0; c < bricksColumnCount; c += 1) {
    bricks[c] = [];
    for (let r = 0; r < bricksRowCount; r += 1) {
      bricks[c][r] = new Brick(c, r);
    }
  }
}
createBricks();
// custom background
function createGradiant() {
  // skyGrad
  const grd = ctx.createLinearGradient(0, 0, 0, 320);
  grd.addColorStop(0, 'cornflowerblue');
  grd.addColorStop(1, 'white');

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 480, 320);
}
function drawCloud(xposition, yposition) {
  // cloud
  ctx.beginPath();
  ctx.arc(xposition, yposition, 30, 0, Math.PI * 2);
  ctx.arc(xposition + 30, yposition, 25, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
}
function drawBG() {
  createGradiant();
  drawCloud(100, 60);
  drawCloud(300, 100);
}
// vars
let lives = 3;
let score = 0;
// draw functions
const infoColor = 'red';
const ball = new Ball(canvas.width / 2, canvas.height - 30, 10, 'red');
function drawBall() {
  ball.render(ctx);
}
const paddle = new Paddle((canvas.width - 75) / 2, 75, 10, 'red', 7, canvas);
function drawPaddle() {
  paddle.render(ctx);
}
function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = infoColor;
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = infoColor;
  ctx.fillText(`Score: ${score}`, 8, 20);
}
function drawBricks() {
  for (let c = 0; c < bricksColumnCount; c += 1) {
    for (let r = 0; r < bricksRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        ctx.beginPath();
        ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
        ctx.fillStyle = infoColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawElements() {
  drawBall();
  drawPaddle();
  drawLives();
  drawScore();
  drawBricks();
}
function moveElements() {
  ball.move();
  paddle.move();
}
// assisters
function wallsCollison() {
  // walls, misses, subtracts lives
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }
}
function collisionDetection() {
  for (let c = 0; c < bricksColumnCount; c += 1) {
    for (let r = 0; r < bricksRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.height) {
          ball.dy = -ball.dy;
          b.status = 0;
          score += 1;
          if (score === bricksRowCount * bricksColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.keyPressed = 'right';
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.keyPressed = 'left';
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.keyPressed = 'none';
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.keyPressed = 'none';
  }
}
// event handlers
document.addEventListener('mousemove', mouseMoveHandler, false);
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
// main run
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBG();
  drawElements();
  collisionDetection();
  wallsCollison();
  moveElements();
  requestAnimationFrame(draw);
}
draw();
// export classes
export default canvas;
