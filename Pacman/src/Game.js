const Pacman = require('./Pacman');
const Ball = require('./Ball');
const Obstacle = require('./Obstacle');

var context;
var canvasHeight = 500;
var canvasWidth = 700;

class Game{

	constructor(){
		this.pacman;
		this.balls = [];
		this.obstacles = [];
	}

	resetCanvasAndContext(){
		var canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		context.clearRect(0,0,canvasWidth,canvasHeight);
		this.renderBalls();
		this.renderObstacles();
	}

	initialize(){
		this.setObstacles();
		this.resetCanvasAndContext();
		this.setBalls();
		this.setPacman();	
	}

	setPacman(){
		this.pacman = new Pacman(30,canvasHeight/2,20, canvasHeight, canvasWidth, this.obstacles);
	
	}

	renderPacman(){
		this.pacman.render(context);
	}

	renderBalls(){
		for (var i = 0; i < this.balls.length; i++) {
			this.balls[i].render(context);
		}
	}

	renderObstacles(){
		for (var i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].render(context);
		}
	}

	setBalls(){
	var ball;
		for (var x = 40; x <= 660; x=x+40) {
			for (var y = 40; y <= 460; y=y+40) {
				ball = new Ball(x,y,5);
				if(!this.overlapsObstacle(ball))
					this.balls.push(ball);
			}
		}
	}

	overlapsObstacle(ball){
		for (var i = 0; i < this.obstacles.length; i++) {
			if(this.isColliding(ball , this.obstacles[i]))
				return true;
		}
		return false;
	}

	isColliding(ball, obstacle) {
		var isXGreater = ball.centerX + ball.radius > obstacle.x;
		var isXLower = ball.centerX - ball.radius < obstacle.x + obstacle.width;
		var isYGreater = ball.centerY + ball.radius > obstacle.y;
		var isYLower = ball.centerY - ball.radius < obstacle.y + obstacle.height;
		return isXGreater && isYGreater && isXLower && isYLower;
	}

	setObstacles(){
		this.obstacles.push(new Obstacle(340, 120, 20, 260));
		this.obstacles.push(new Obstacle(220, 240, 260, 20));

		this.obstacles.push(new Obstacle(20, 20, 20, 150));
		this.obstacles.push(new Obstacle(20, 20, 150, 20));
		this.obstacles.push(new Obstacle(20, 330, 20, 150));
		this.obstacles.push(new Obstacle(20, 460, 150, 20));
		this.obstacles.push(new Obstacle(530, 20, 150, 20));
		this.obstacles.push(new Obstacle(660, 20, 20, 150));
		this.obstacles.push(new Obstacle(530, 460, 150, 20));
		this.obstacles.push(new Obstacle(660, 330, 20, 150));

		this.obstacles.push(new Obstacle(440, 20, 20, 140));
		this.obstacles.push(new Obstacle(250, 20, 20, 140));
		this.obstacles.push(new Obstacle(250, 20, 200, 20));

		this.obstacles.push(new Obstacle(440, 340, 20, 140));
		this.obstacles.push(new Obstacle(250, 340, 20, 140));
		this.obstacles.push(new Obstacle(250, 460, 200, 20));

		this.obstacles.push(new Obstacle(70, 240, 70, 20));
		this.obstacles.push(new Obstacle(580, 240, 50, 20));

		this.obstacles.push(new Obstacle(120, 120, 20, 260));
		this.obstacles.push(new Obstacle(560, 120, 20, 260));
	}

	runListeners(){
	 var ctx = this;
		document.addEventListener('keydown', function(event) {
			if(event.keyCode == 38){ //UP ARROW
					ctx.pacman.speedX = 0;
					ctx.pacman.speedY = -1;
			}
			if(event.keyCode == 40){ //DOWN ARROW
					ctx.pacman.speedX = 0;
					ctx.pacman.speedY = 1;
			}
			if(event.keyCode == 37){ //LEFT ARROW
					ctx.pacman.speedX = -1;
					ctx.pacman.speedY = 0;
			}
			if(event.keyCode == 39){ //RIGHT ARROW
					ctx.pacman.speedX = 1;
					ctx.pacman.speedY = 0;
			}
		}, false);
	}



	play(){
	var gameCtx = this;

	var intervalId = setInterval(function() {
		gameCtx.resetCanvasAndContext();
		gameCtx.runListeners();
		gameCtx.pacman.move();
		gameCtx.renderPacman();

	}, 0);

	// setTimeout(function(){
	// 	clearInterval(intervalId);
	// }, 10000);

	}

}

module.exports = Game;
