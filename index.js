//  canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// import classes
import Ball from "./js/ball.js"
// import Brick from "./js/bricks.js"
import Paddle from "./js/paddle.js"
// draw functions
const infoColor="red"
const ball=new Ball(canvas.width / 2, canvas.height -30, 10, "red")
function drawBall(){
  ball.render(ctx)
}
const paddle=new Paddle((canvas.width - 75) /2, 75, 10, "red", 7)
function drawPaddle(){
  paddle.render(ctx)
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
function drawElements(){
  drawBall()
  drawPaddle()
  drawLives()
  drawScore()
}
function moveElements(){
  ball.move()
  paddle.move()
}
// assisters
let lives = 3;
let score= 0;
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
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.keyPressed="right"
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.keyPressed="left"
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.keyPressed="none"
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.keyPressed="none"
  }
}
// event handlers
document.addEventListener('mousemove', mouseMoveHandler, false);
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
// main run
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBG();
  drawElements();
  // collisionDetection();
  // drawLives();
  wallsCollison();
  // paddleMove();
  moveElements()
  requestAnimationFrame(draw);
}
draw();

// export classes
export default canvas