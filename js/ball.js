import ctx from "../index"

class Ball{
    constructor(x, y, radius, color=red){
      this.radius=radius
      this.color=color
      this.dx=dx
      this.dy=dy
      this.x=x
      this.y=y
    }
    move(){
      this.x+=this.dx
      this.y+=this.dy
    }
    render(ctx){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
}

export default Ball