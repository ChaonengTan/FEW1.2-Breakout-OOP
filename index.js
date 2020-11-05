//  canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// import classes
import Ball from "./js/ball"
// function groups
function drawBall(){
  const ball=new Ball(canvas.width / 2, canvas.height -30, 5)
  ball.render(ctx)
}
function drawElements(){
  drawBall()
}
// main run
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBG();
  drawElements();
  // collisionDetection();
  // drawLives();
  // wallsCollison();
  // paddleMove();

  // moveBall();
  requestAnimationFrame(draw);
}
draw();

// export classes
export default ctx