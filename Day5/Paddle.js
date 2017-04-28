function Paddle(x, y, width, height){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.color = 'blue';
	this.moveUpFlag = false;
	this.moveDownFlag = false;
}

Paddle.prototype.toString = function(){
	console.log('Paddle --> ['+this.x+','+this.y+'] w='+this.width+', h='+this.height);
}

Paddle.prototype.render = function(context){
	context.beginPath();
  	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.width, this.height);
	context.fill();
}

Paddle.prototype.moveUp = function(canvasHeight){
	if(this.y >= 1){
		this.y -= 1;
	}
}

Paddle.prototype.moveDown = function(canvasHeight){
	if(this.y + this.height <= canvasHeight - 1){
		this.y += 1;
	}
}
