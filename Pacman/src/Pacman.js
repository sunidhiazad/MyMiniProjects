const Obstacle = require('./Obstacle');

class Pacman {

	  constructor(centerX, centerY, radius,canvasHeight, canvasWidth, obstacles) {
	    this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.color = 'yellow';
		this.speedX = 0;
		this.speedY = 0;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.obstacles = obstacles;
	  }

	  toString() {
	    console.log(`[${this.centerX},${this.centerY}]: r=${this.radius}`)
	  }


	move(){


		if(this.touchingNorthWall() && this.speedY == -1){
			this.speedY = 0;	
		}
		if(this.touchingSouthWall() && this.speedY == 1){
			this.speedY = 0;	
		}
		if(this.touchingWestWall() && this.speedX == -1){
			this.speedX = 0;	
		}
		if(this.touchingEastWall() && this.speedX == 1){
			this.speedX = 0;	
		}	
		if(this.touchingAnyObstacle()){
			this.speedX = 0;
			this.speedY = 0;
		}
		this.centerX+=this.speedX;
		this.centerY+=this.speedY;

	}
  
	touchingNorthWall(){
		return (this.centerY - this.radius <= 0);
	}

	touchingSouthWall(){
		return (this.centerY + this.radius >= this.canvasHeight);
	}

	touchingWestWall(){
		return (this.centerX - this.radius <= 0);
	}

	touchingEastWall(){
		return (this.centerX + this.radius >= this.canvasWidth);
	}


	touchingAnyObstacle(){
		for (var i = 0; i < this.obstacles.length; i++) {
			if(this.isColliding(this.obstacles[i]))
				return true;
		}
		return false;
	}

	isColliding(obstacle) {
		var isXGreater = this.centerX + this.radius > obstacle.x;
		var isXLower = this.centerX - this.radius < obstacle.x + obstacle.width;
		var isYGreater = this.centerY + this.radius > obstacle.y;
		var isYLower = this.centerY - this.radius < obstacle.y + obstacle.height;
		return isXGreater && isYGreater && isXLower && isYLower;
	}


	render(context){
		context.beginPath();
		context.arc(this.centerX, this.centerY, this.radius, 0.2 * Math.PI, 1.8 * Math.PI, false);
		context.lineTo(this.centerX, this.centerY);
		context.closePath();
		context.fillStyle = "yellow";
		context.fill();
		context.stroke();
		context.beginPath();
		context.arc(this.centerX, this.centerY - this.radius/2, this.radius/5, 0, 2 * Math.PI, false);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fill();
    }

}

module.exports = Pacman;
