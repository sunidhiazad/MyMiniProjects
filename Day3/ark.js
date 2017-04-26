function Ball(centerX, centerY, radius){
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.color = '#ff0000';
}

function Game(ball,canvasWidth,canvasHeight){
	this.blocks = [];
	this.ball = ball;
	this.canvasWidth = canvasWidth;
	this.canvasHeight = canvasHeight;
	this.platform;
}

function Block(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.color = getRandomShadesOfBlue();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomShadesOfBlue(){
	h = 240;
	s = Math.floor(Math.random() * 100);
	l = Math.floor(Math.random() * 100);
	color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
	return color;
}


Block.prototype.toString = function(){
	console.log('x: '+this.x+', y: '+this.y+', width: '+this.width+', height: '+this.height+', color: '+this.color);
}

Ball.prototype.toString = function(){
	console.log('centerX: '+this.centerX+', centerY: '+this.centerY+', radius: '+this.radius+', color: '+this.color);
}

Ball.prototype.render = function(context){
	context.beginPath();
	context.fillStyle = this.color;
	context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
	context.fill();
}

Block.prototype.render = function(context){
	var thickness = 2;
	context.beginPath();
	context.fillStyle='#000';
  	context.fillRect(this.x - (thickness), this.y - (thickness), this.width + (thickness * 2), this.height + (thickness * 2));
  	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.width, this.height);
	context.fill();
}


Game.prototype.resetCanvasAndContext = function(){
	var canvas = document.getElementById('canvas');
	canvas.style.backgroundColor = 'rgba(158, 167, 184, 0.2)';
	var context = canvas.getContext('2d');
	context.clearRect(0,0,400,300);
	return context;
}

Game.prototype.addBlocks = function(){
	for (var i = 5; i <= 65; i = i+20) {
  		for (var j = 20; j < 360 ; j = j+45) {
  			var blk = new Block(j,i,20,45);
  			this.blocks.push(blk);
  		}
  	}
}

Game.prototype.addPlatform = function(){
  	this.platform = new Block(100,280,10,200);
  	this.platform.color = '#000';
}

Game.prototype.play = function(){
	
	var game = this;
	var xCoor = this.ball.centerX;
	var yCoor = this.ball.centerY;
	var radius = this.ball.radius;

	var speedX = 1;
	var speedY = 1;
	var canvasWidth = 400;
	var canvasHeight = 300;

	var intervalId = setInterval(function() {
		
		var ball = new Ball(xCoor,yCoor,radius);
		var blk;

		var context = game.resetCanvasAndContext();

  		ball.render(context);
  		game.platform.render(context);
  		for (var i = 0; i < game.blocks.length; i++) {
  			game.blocks[i].render(context);
  		}

  		if(xCoor === canvasWidth-radius){
  			speedX=-1;
  		}
  		if(xCoor === radius){
  			speedX=1;
  		}
  		if(yCoor === canvasHeight-radius){
  			speedY=-1;
  		}
  		if(yCoor === radius){
  			speedY=1;
  		}
  		xCoor+=speedX;
  		yCoor+=speedY;
  		
	}, 5);

	setTimeout(function(){
		clearInterval(intervalId);
	},5000);
}

var canvasWidth = 400;
var canvasHeight = 300;
var ball = new Ball(100,20,10);

var game = new Game(ball,canvasWidth,canvasHeight);

game.addBlocks();
game.addPlatform();
game.play();


