import Game from "./game.js"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const startScreen = document.getElementById("start-screen")
    const gameOver = document.getElementById("game-over")
    let newGame = new Game(canvas, startScreen, gameOver)
})
