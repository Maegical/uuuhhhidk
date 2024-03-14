/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/space.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('backgroundmusic', 0, true);
		}

		//Hover Effect Graffic
		//startButton.color = `yellow`
		startButton.img.src="images/button2.png"
	}
	else
	{
		//Default Button Graphic
		//startButton.color = `red`
		startButton.img.src="images/button1.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
