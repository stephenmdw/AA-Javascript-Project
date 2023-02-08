import Ball from "./ball.js"
import Hoop from "./hoop.js"
import Score from "./score.js"

class Game {
    constructor(canvas, startScreen, gameOver){
        this.ctx = canvas.getContext("2d"); //creates instance of drawing context
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.hoop = new Hoop(this.ctx)
        this.score = new Score(this.ctx)
        this.ball = new Ball(this.ctx)
        this.dragging = false
        this.startX = 0
        this.startY = 0
        this.endX = 0
        this.endY  = 0
        this.reset = this.reset.bind(this)
        canvas.addEventListener("mousedown", this.startDrag.bind(this));
        canvas.addEventListener("mouseup", this.stopDrag.bind(this));
        const startButton = document.getElementById("start-button")
        const tutButton = document.getElementById("tut-button")
        startButton.addEventListener('click', this.start.bind(this))
        tutButton.addEventListener('click', this.tutorial.bind(this))
        this.startScreen = startScreen
        this.over = gameOver
        this.play() 

    }
    
    animate(){
        this.ctx.clearRect(0, 0, 1000, 680)
        // console.log('clearing frame')
        this.drawBackground()
        this.ball.detectCollision(this.hoop)
        this.reset()
        this.score.animate()
        this.ball.animate(this.ctx)
        this.hoop.animate(this.ctx)
        // this.increaseScore()
        window.requestAnimationFrame(this.animate.bind(this)) //why is this causing a orange line to connect
    }

    drawBackground(){
        // this.ctx.beginPath();
        // this.ctx.fillStyle = "white"
        // this.ctx.strokeStyle = "white"
        // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        // this.ctx.stroke();
        // // this.ctx.fillRect()
        // this.ctx.closePath();

        var background = new Image();
        background.src = "./assets/background.png";
        this.ctx.drawImage(background,-150,-50)

    }

    play(){
        this.animate()
    }

    startDrag(){
        this.ball.dragging = true
        this.startX = event.clientX;
        this.startY = event.clientY;
        console.log("Mouse is at X: " + this.startX + ", Y: " + this.startY);
    }

    stopDrag(){
        this.endX = event.clientX;
        this.endY = event.clientY;
        this.ball.vel[0] = (this.startX - this.endX)/5 
        this.ball.vel[1] = (this.startY - this.endY)/4
        console.log(this.ball.vel)
        this.ball.dragging = false
    }


    reset(){
        if (this.ball.pos[0] > 1000 || this.ball.pos[1] > 800){
            if(this.ball.made === true){
                this.score.playerScore++
                this.ball.made = false
            } else {
                this.score.playerLives--
            }

            this.ball.pos[0] = 100
            this.ball.pos[1] = 575
            this.ball.vel = [0,0]
        }

        if (this.score.playerLives === 0){
            this.gameOver()
        }
    }

    start(){
        document.getElementById("start-screen").style.display = "none"
    }

    tutorial(){
        if(document.getElementById("howtoplay").style.display === "none"){
            document.getElementById("tut-screen").style.width = '400px';
            document.getElementById("tut-screen").style.padding = '10px';
            document.getElementById("tut-screen").style.height = '250px';
            document.getElementById("howtoplay").style.display = "flex"
            document.getElementById("tut-text").style.display = "flex"
            document.getElementById("tut-button").textContent = "x"
            document.getElementById("tut-button").style.width = "30px";
            document.getElementById("tut-button").style.height = "30px"
        } else {
            document.getElementById("tut-screen").style.width = '200px';
            document.getElementById("tut-screen").style.padding = '0px';
            document.getElementById("tut-screen").style.height = '50px';
            document.getElementById("howtoplay").style.display = "none"
            document.getElementById("tut-text").style.display = "none"
            document.getElementById("tut-button").textContent = "TUTORIAL"
            document.getElementById("tut-button").style.width = "200px";
            document.getElementById("tut-button").style.height = "50px"

        }
    }

    gameOver(){
        document.getElementById("game-over").style.display = "flex"
        document.getElementById("restart-button").addEventListener('click', this.restartGame.bind(this))
    }

    restartGame(){
        this.resetValues()
        document.getElementById("game-over").style.display = "none"
    }

    resetValues(){
        this.score.playerScore = 0
        this.score.playerLives = 3
    }

    // increaseScore(){
    //     if (this.ball.made === true){
    //         // debugger
    //         this.score.playerScore += 1
    //         this.ball.made = false
    //         console.log(this.score.playerScore)
    //     } 
    // }

}

export default Game


//startDrag 
//should track the initial mousedown event and 
//add the distance from the mouse, both x and y to velocity
//
//when it is lifted (endDrag)
//the ball should launch from the position with the velocity assigned to it 