import canvas from "../index.js"
class Paddle{
    constructor(x, width=75, height=10, color="red", dx=7){
        this.x=x
        this.width=width
        this.height=height
        this.color=color
        this.dx=dx
        this.keyPressed="none"
    }
    move(){
        if(this.keyPressed==="left"){
            this.x-=this.dx
        } else if(this.keyPressed==="right"){
            this.x+=this.dx
        }
    }
    render(ctx){
        ctx.beginPath();
        //320 with canvas.height (how to pass in canvas?)
        ctx.rect(this.x, 320 - this.height, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
export default Paddle