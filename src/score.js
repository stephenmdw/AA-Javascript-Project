class Score {
    constructor(ctx){
        this.ctx = ctx
        this.playerScore = 0
        this.playerLives = 3
        var f = new FontFace('Dimis', 'url(./assets/DIMIS___.TTF)');
        
        f.load().then(function(font) {
            // Ready to use the font in a canvas context
            // console.log('font ready');
            // Add font on the html page
            document.fonts.add(font);
        });        
    }

    animate(ctx){
        // this.drawScoreBox()
        this.draw()
        this.drawLives()
    }

    // drawScoreBox(){
    //     this.ctx.beginPath();
    //     this.ctx.rect(10, 10, 300, 60)
    //     this.ctx.strokeStyle = "black";
    //     this.ctx.stroke()
    //     this.ctx.closePath()
    // }

    draw(){
        
        this.ctx.font = "50px Dimis";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Score: "+ this.playerScore, 20, 60);
    }

    drawLives(){
        this.ctx.font = "50px Dimis";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Lives: "+ this.playerLives, 250 , 60);

        // this.ctx.beginPath();
        // this.ctx.arc(200, 100, this.radius, 0, 2 * Math.PI, false);
        // this.ctx.strokeStyle = "Orange"
        // this.ctx.fillStyle = "Orange"
        // this.ctx.stroke();
        // this.ctx.fill();
        // this.ctx.closePath()
    }


}

export default Score