function Board(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = 'black';
}

Board.prototype.toString = function(){
	console.log('Board --> ['+this.x+','+this.y+'] w='+this.width+', h='+this.height);
}

Board.prototype.render = function(context){
	context.beginPath();
  	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.width, this.height);
	context.fill();
}

Board.prototype.setColor = function(color){
	this.color = color;
}

