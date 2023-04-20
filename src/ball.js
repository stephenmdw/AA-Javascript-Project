const GRAVITY = 0.4

class Ball {
    constructor(ctx) {
        this.ctx = ctx
        this.pos = [100, 575]
        this.radius = 25
        this.vel = [0, 0]
        this.animate = this.animate.bind(this)
        this.dragging = false
        this.dragStart = [0, 0]
        this.dragEnd = [0, 0]
        this.detectCollision = this.detectCollision.bind(this)
        this.made = false
        this.ballbounce = new Audio('./assets/ballbounce.mp3')
        this.makeshot = new Audio('./assets/makeshot.mp3')
    }

    drawBall(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = "Orange"
        ctx.fillStyle = "Orange"
        ctx.stroke();
        ctx.fill();
        ctx.closePath()
    }

    animate() {
        if (!this.dragging) {
            this.move()
        }
        this.drawBall(this.ctx)
    }

    move() {
        if (this.vel[0] !== 0) {
            this.pos[0] += this.vel[0]
            this.pos[1] += this.vel[1]
            this.applyGravity()
        }
    }


    detectCollision(hoop) {
        if (this.pos[0] + this.radius >= hoop.x && this.pos[0] + this.radius >= hoop.x + 10 && this.pos[1] >= hoop.y && this.pos[1] <= hoop.y + 125) {
            //backboard collision
            this.ballbounce.play()
            this.vel[0] = this.vel[0] * -1
            this.pos[0] += -10
            this.pos[1] += this.vel[1]

        } else if ((this.pos[0] + this.radius >= hoop.x - 95 && this.pos[0] + this.radius <= hoop.x - 75) && ((this.pos[1] + this.radius >= hoop.y + 65 && this.pos[1] + this.radius <= hoop.y + 105) || (this.pos[1] - this.radius >= hoop.y + 55 && this.pos[1] - this.radius <= hoop.y + 105))) {
            //front rim collision
            this.ballbounce.play()
            this.vel[0] = this.vel[0] * -1
        } else if (this.pos[0] + this.radius >= hoop.x - 5 && this.pos[0] + this.radius <= hoop.x + 45 && this.pos[1] + this.radius >= hoop.y - 10 && this.pos[1] + this.radius <= hoop.y + 10) {
            //top backboard collision
            this.ballbounce.play()
            this.vel[1] = this.vel[1] * -1
        }

        if ((this.pos[0] + this.radius <= hoop.x && this.pos[0] + this.radius >= hoop.x - 85) && this.pos[1] + this.radius >= hoop.y + 75 && this.pos[1] + this.radius <= hoop.y + 115) {
            this.makeshot.play()
            this.made = true;
            this.vel[0] = 0.1;
            this.vel[1] = 10;
        }
    }

    applyGravity() {
        this.vel[1] += GRAVITY
    }
}

export default Ball