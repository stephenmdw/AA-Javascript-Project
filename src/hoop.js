
class Hoop {
    constructor(ctx){
        this.ctx = ctx
        this.x = 950
        this.y = 250
        this.animate = this.animate.bind(this)
    }

    animate(ctx){
        this.drawHoop(ctx)
    }

    //assign variables to the x and y position of the hoop and backboard to calculate collisions

    drawHoop(ctx){
        //backboard
        ctx.beginPath();
        ctx.rect(this.x, this.y, 10, 125);
        ctx.strokeStyle = "black"
        ctx.stroke();
        ctx.closePath();
        //rim
        ctx.beginPath();
        ctx.rect(this.x-85, this.y + 75, 85, 10);
        ctx.strokeStyle = "red"
        ctx.stroke();
        ctx.closePath();
    }

}

export default Hoop