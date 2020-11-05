import canvas from "../index.js"
class Paddle{
    constructor(x, width=75, height=10, color="red", dx=7){
        this.x=x
        this.width=width
        this.height=height
        this.color=color
        this.dx=dx
    }
    move(direction){
        if(direction==="left"){
            this.x-=this.dx
        } else{
            this.x+=this.dx
        }
    }
    render(ctx){
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}
export default Paddle