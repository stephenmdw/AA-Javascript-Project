## Project Overview
In Basketball, users will be able to shoot a basketball from the left side of the screen towards a hoop located on the right side. 
After pressing start, the player will be greeted with a small tutorial page explaining the controls. 
To shoot the basketball, the player will click and drag their cursor back, changing the speed and trajectory of the ball depending on the length of the drag back, and the angle their mouse is positioned relative to the ball. 
A score function will be incremented every time a ball is passed through the hoop. 
In order to add a difficulty component, the hoop will either relocate or move in either a vertical or horizontal direction. 
Players will have three balls that they can shoot. A successful make will return the shot ball back to them, but if they miss, i.e. hit the bottom of the screen, they will lose the ball. 
After players lose the game they will have the option to restart the game.
If there is time, options to customize the ball and hoop will be added as well.

###Timeline 

Over Friday and the weekend, classes and images should be done for the ball, hoop, lives, and score. 

Monday will be dedicated to ensuring the ball's trajectory and firing are working properly. I will also implement the movement of the hoop.
        
Tuesday will involve the scoring and collisions with the hoop, as well as creating a game over/restart screen.

Wednesday will focus on styling the webpage and ironing out bugs within.

![UI Screenshot](./sampleUI.png?raw=true "Optional SampleUI")

###Technologies

npm will be used to manage project dependencies, while canvas will be the main tool to render the game board, including the hoop, ball, score, and lives. 

PixiJS js may also be used, but this will be determined after exploring the limitations of canvas, as well as the difficulty of Pixi. https://pixijs.com/
        
