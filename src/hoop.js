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

    drawHoop(ctx){
        //backboard
        ctx.beginPath();
        ctx.rect(this.x, this.y, 10, 125);
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"
        ctx.fill()
        ctx.stroke();
        ctx.closePath();
        //rim
        ctx.beginPath();
        ctx.rect(this.x-85, this.y + 75, 85, 10);
        ctx.strokeStyle = "red"
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.stroke();
        ctx.closePath();
    }

}

export default Hoop