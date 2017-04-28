var context;
var canvasWidth = 600;
var canvasHeight = 400;

function Game(){
	this.paddles = [];
	this.ball;
	this.players = [];
	this.boards = [];
	this.isOver = false;
}

Game.prototype.resetCanvasAndContext = function(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	context.clearRect(0,0,canvasWidth,canvasHeight);
}

Game.prototype.initialize = function(){
	this.resetCanvasAndContext();
	this.ball = new Ball(100,300,5, [1,1]);
	this.addPaddles();
	this.addBoards();
	this.addPlayers();
	this.setPlayerNames();
}

Game.prototype.setPlayerNames = function(){
	this.players[0].name = window.prompt('Enter name for Player#1');
	this.players[1].name = window.prompt('Enter name for Player#2');
}

Game.prototype.addPaddles = function(){
	var paddle1 = new Paddle(10, 50, 15, 80);
	var paddle2 = new Paddle(canvasWidth - 25, 50, 15, 80);

	this.paddles.push(paddle1);
	this.paddles.push(paddle2);
}

Game.prototype.addBoards = function(){
	var board1 = new Board(0, 0, canvasWidth/2 , canvasHeight);
	var board2 = new Board(canvasWidth/2, 0, canvasWidth/2 , canvasHeight);

	board1.setColor('grey');
	board2.setColor('grey');

	this.boards.push(board1);
	this.boards.push(board2);
}

Game.prototype.addPlayers = function(){
	var player1 = new Player(1, 0, this.paddles[0], this.boards[0]);
	var player2 = new Player(2, 0, this.paddles[1], this.boards[1]);

	this.players.push(player1);
	this.players.push(player2);
}

Game.prototype.renderBoards = function(){
	this.boards[0].setColor('grey');
	this.boards[1].setColor('grey');

	this.boards[0].render(context);
	this.boards[1].render(context);
}

Game.prototype.renderPaddles = function(){
	this.paddles[0].render(context);
	this.paddles[1].render(context);
}

Game.prototype.renderBall = function(){
	this.ball.render(context);
}

Game.prototype.renderLine = function(){
	context.fillStyle = 'red';
	context.setLineDash([5,3]);
	context.moveTo(canvasWidth/2, 0);
    context.lineTo(canvasWidth/2, canvasHeight);
    context.stroke();
}

Game.prototype.checkCollisionsWithPaddle = function(){
	for (var i = 0; i < this.paddles.length; i++) {
		if(isColliding(this.ball,this.paddles[i])){
			this.ball.speed[0] = game.ball.speed[0] * -1;
			//this.ball.speed[1] = game.ball.speed[1] * -1;
		}
	}
}

function isColliding(ball, paddle) {
	var isXGreater = ball.centerX + ball.radius > paddle.x;
	var isXLower = ball.centerX - ball.radius < paddle.x + paddle.width;
	var isYGreater = ball.centerY + ball.radius > paddle.y;
	var isYLower = ball.centerY - ball.radius < paddle.y + paddle.height;
	return isXGreater && isYGreater && isXLower && isYLower;
}

Game.prototype.renderScores = function(){
	context.font = "20px Comic Sans MS";
	context.fillStyle = "green";
	context.textAlign = "center";
	context.fillText(this.players[0].score, canvas.width/2 - 50, 30); 
	context.fillText(this.players[1].score, canvas.width/2 + 50, 30); 
}

Game.prototype.isGameOver = function(){
	if(this.players[0].score === 11 || this.players[1].score === 11)
		return true;
	else 
		return false;
}

Game.prototype.play = function(){
	var gameCtx = this;

	var intervalId = setInterval(function() {

		gameCtx.resetCanvasAndContext();

  		gameCtx.renderBoards();
  		gameCtx.renderBall();
  		gameCtx.renderPaddles();
  		gameCtx.renderLine();
  		gameCtx.renderScores();

  		if(gameCtx.isGameOver()){
  			var text = 'Game Over!';
  			if(gameCtx.players[0].score > gameCtx.players[1].score)
  				text += 'Congratulations, '+gameCtx.players[0].name+' won!';
  			else
  				text += 'Congratulations, '+gameCtx.players[1].name+' won!';
			alert(text);
			clearInterval(intervalId);
			gameCtx.renderBoards();
		}

  		//Hit the East Wall
  		if(gameCtx.ball.centerX === canvasWidth - gameCtx.ball.radius) {
  			gameCtx.ball.speed[0] = gameCtx.ball.speed[0] * -1;
  			gameCtx.players[0].score++;
  			var int1 = setInterval(function(){
  				gameCtx.boards[1].setColor('red');
  				gameCtx.boards[1].render(context);
  			},0);
  			setTimeout(function(){
  				clearInterval(int1);
  			},75);

  		}

  		//Hit the West Wall
  		if(gameCtx.ball.centerX === gameCtx.ball.radius) {
  			gameCtx.ball.speed[0] = gameCtx.ball.speed[0] * -1;
  			gameCtx.players[1].score++;
  			var int2 = setInterval(function(){
  				gameCtx.boards[0].setColor('red');
  				gameCtx.boards[0].render(context);
  			},0);
  			setTimeout(function(){
  				clearInterval(int2);
  			},75);

  		}

  		//Hit the South Wall
		if(gameCtx.ball.centerY === canvasHeight-gameCtx.ball.radius) {
			gameCtx.ball.speed[1] = gameCtx.ball.speed[1] * -1;
		}

		//Hit the North Wall
		if(gameCtx.ball.centerY === gameCtx.ball.radius) {
			gameCtx.ball.speed[1] = gameCtx.ball.speed[1] * -1;
		}

  		gameCtx.ball.centerX += gameCtx.ball.speed[0];
  		gameCtx.ball.centerY += gameCtx.ball.speed[1];

  		gameCtx.movePaddles();
		gameCtx.checkCollisionsWithPaddle();

	}, 5);

}

Game.prototype.movePaddles = function(){
	for (var i = 0; i < this.paddles.length; i++) {
		if(this.paddles[i].moveUpFlag){
			this.paddles[i].moveUp(canvasHeight);
		}
		if(this.paddles[i].moveDownFlag){
			this.paddles[i].moveDown(canvasHeight);
		}
	}
}

document.addEventListener('keydown', function(event) {
			
	if(event.keyCode == 16){ //SHIFT
		game.paddles[0].moveUpFlag = true;
		game.paddles[0].moveDownFlag = false;
	}

	if(event.keyCode == 17){ //CONTROL
		game.paddles[0].moveDownFlag = true;
		game.paddles[0].moveUpFlag = false;
	}

	if(event.keyCode == 37){ //LEFT ARROW
		game.paddles[1].moveUpFlag = true;
		game.paddles[1].moveDownFlag = false;
	}

	if(event.keyCode == 39){ //RIGHT ARROW
		game.paddles[1].moveDownFlag = true;
		game.paddles[1].moveUpFlag = false;
	}
  
}, false);

document.addEventListener('keyup', function(event) {
			
	if(event.keyCode == 16){ //SHIFT
		game.paddles[0].moveUpFlag = false;
	}

	if(event.keyCode == 17){ //CONTROL
		game.paddles[0].moveDownFlag = false;
	}

	if(event.keyCode == 37){ //LEFT ARROW
		game.paddles[1].moveUpFlag = false;
	}

	if(event.keyCode == 39){ //RIGHT ARROW
		game.paddles[1].moveDownFlag = false;
	}
  
}, false);

var game = new Game();
game.initialize();
game.play();


