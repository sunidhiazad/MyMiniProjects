class Obstacle{

	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	toString(){
		console.log(`[${this.x},${this.y}] w=${this.width} h=${this.height}`);
	}

	render(context){
		context.beginPath();
	  	context.fillStyle = 'blue';
		context.fillRect(this.x, this.y, this.width, this.height);
		context.fill();
	}
}

module.exports = Obstacle;