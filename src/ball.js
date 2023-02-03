class Ball{
    constructor(){
    }

    animate(){

    }

    drawBall(){
        let ball = PIXI.Sprite.from('./basketball.png');
        ball.width = 80
        ball.height = 80
        ball.x = 100
        ball.y = 350
        ball.interactive = true;
        return ball
    }

}
export default Ball