# Hoops

Hoops is a single player game where the player is given three lives to make as many shots into the hoop as they can. Every missed shot deducts from the player's total lives, while made shots return the ball to the player and increase their score. 

[Link to game](https://stephenmdw.github.io/hoops-game/)  
<br>  

## Technologies used

This project used the following technologies:
* `npm` - Managed project dependencies
* `webpack` - Bundled Javascript source code
* `Canvas API` - Rendered game board, as well as everything appearing on the game board  
<br>

## Gameplay

https://user-images.githubusercontent.com/117553743/217938450-68138e0f-2403-465d-968f-6fc82410b751.mov

## Features
#### Functional start and game over screen
#### Score and lives system
#### Mutable background audio
#### Collision detection between ball and hoop
#### Vector based shooting mechanics
* Tracked mouse events to simulate a slingshot effect to launch the ball towards the hoop.
* Recorded the x and y values at the beggining and end of the drag event to produce values for a vector calcuation.
* A vector was calculated, and factored in for the ball's travel along a quadratic curve.

```javascript
// src/game.js
startDrag(){
    if ( this.shot === false ){
        this.ball.dragging = true;
        this.startX = event.clientX;
        this.startY = event.clientY;
    }
}
            
stopDrag(){
    if ( this.shot === false ){
        this.endX = event.clientX;
        this.endY = event.clientY;
        this.ball.vel[0] = (this.startX - this.endX)/5 
        this.ball.vel[1] = (this.startY - this.endY)/5
        this.ball.dragging = false;
        this.shot = true;
    }
}
```

## Bonus features

Planned updates to this game are as follows:
* Improved collisions and hoop animations
* An indicator originating from the ball to help aim 
* A moving hoop to increase difficulty
* Sound effects for the ball shot and collisions    
* Options to customize ball, hoop, and backdrop

<br>
<br>
<br>



# Final Proposal

## Project Overview
In Basketball, users will be able to shoot a basketball from the left side of the screen towards a hoop located on the right side. 
After pressing start, the player will be greeted with a small tutorial page explaining the controls. 
To shoot the basketball, the player will click and drag their cursor back, changing the speed and trajectory of the ball depending on the length of the drag back, and the angle their mouse is positioned relative to the ball. 
A score function will be incremented every time a ball is passed through the hoop. 
Players will have three balls that they can shoot. A successful make will return the shot ball back to them, but if they miss, i.e. hit the bottom of the screen, they will lose the ball. 
After players lose the game they will have the option to restart the game.
If there is time, options to customize the ball and hoop will be added as well.

### Timeline 

Over Friday and the weekend, classes and images should be done for the ball, hoop, lives, and score. 

Monday will be dedicated to ensuring the ball's trajectory and firing are working properly. I will also implement the movement of the hoop.
        
Tuesday will involve the scoring and collisions with the hoop, as well as creating a game over/restart screen.

Wednesday will focus on styling the webpage and ironing out bugs within.

### Mockup
![UI Screenshot](./sampleUI.png?raw=true "Optional SampleUI")

### Technologies

npm will be used to manage project dependencies, while canvas will be the main tool to render the game board, including the hoop, ball, score, and lives. 

PixiJS js may also be used, but this will be determined after exploring the limitations of canvas, as well as the difficulty of Pixi. https://pixijs.com/
        
