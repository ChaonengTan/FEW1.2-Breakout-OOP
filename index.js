//  canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// import classes
import Ball from "./js/ball.js"
// import Brick from "./js/bricks.js"
import Paddle from "./js/paddle.js"
// draw functions
const ball=new Ball(canvas.width / 2, canvas.height -30, 10, "red")
function drawBall(){
  ball.render(ctx)
}
const paddle=new Paddle((canvas.width - 75) /2, 75, 10, "red", 7)
function drawPaddle(){
  paddle.render(ctx)
}

function drawElements(){
  drawBall()
  drawPaddle()
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
    if (ball.x > paddleX && x < paddleX + paddleWidth) {
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
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
}
// main run
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBG();
  drawElements();
  // collisionDetection();
  // drawLives();
  wallsCollison();
  // paddleMove();

  ball.move()
  requestAnimationFrame(draw);
}
draw();

// export classes
export default canvas