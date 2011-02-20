function Tank(color) {
	
	this.color = color || 'hsl('+Math.random*255+',100,50)';
	this.pos = parseInt(Math.random()*canvas.width,10);
	
	this.draw = function(){
		c.fillStyle = this.color;
		c.translate(this.pos,landscape.getHeight(this.pos));
		c.beginPath();
		c.moveTo(-10,0);
		c.lineTo(-8,-10);
		c.lineTo(8,-10);
		c.lineTo(10,0);
		c.closePath();
		c.fill();
		c.restore();
	}
	
}