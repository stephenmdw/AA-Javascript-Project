import Ball from "./ball.js"
import Hoop from "./hoop.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const startScreen = document.getElementById("start-screen")
    const gameOver = document.getElementById("game-over")
    // const ctx = canvas.getContext("2d");
    
    // let ball = new Ball(ctx);
    // ball.drawBall();

    // let hoop = new Hoop(ctx);
    // hoop.drawHoop()

    let newGame = new Game(canvas, startScreen, gameOver)
})


//https://www.geeksforgeeks.org/trajectory-formula/
//need to determine:
//theta: angle at which ball flies
//v: velocity
//maybe solve for x and y to determine position at a given time?
//y = x tan θ − gx^2/2v^2 cos2^ θ

