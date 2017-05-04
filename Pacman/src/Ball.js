class Ball {
  constructor(centerX, centerY, radius) { 
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.color = 'red';
  }

  toString() { 
    console.log(`[${this.centerX},${this.centerY}]: r=${this.radius}`)
  }

  render(context){
	context.beginPath();
	context.fillStyle = this.color;
	context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
	context.fill();
  }

}

module.exports = Ball;