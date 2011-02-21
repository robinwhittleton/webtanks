function Tank(color) {
	
	this.color = color || 'hsl('+Math.random*255+',100,50)';
	this.pos = parseInt(Math.random()*canvas.width,10);
	this.angle = 0;
	this.power = 50;
	this.recharging = false;
	this.rechargeTime = 5000;
	
	this.update = function(){
		if (aimLeft) this.angle = Math.max(this.angle-1,-90);
		if (aimRight) this.angle = Math.min(this.angle+1,90);
		if (powerUp) this.power = Math.min(this.power+2,100);
		if (powerDown) this.power = Math.max(this.power-2,0);
		if (fireShot) {
			this.recharging = true;
			fireShot = false;
			setTimeout(function(){
				arguments[0].recharging = false;
			},this.rechargeTime,this);
		}
	}
	
	this.draw = function(){
		c.save();
		c.translate(this.pos,landscape.getHeight(this.pos));
		
		// draw tank
		c.fillStyle = this.color;
		c.beginPath();
		c.moveTo(-8,0);
		c.lineTo(-6,-10);
		c.lineTo(6,-10);
		c.lineTo(8,0);
		c.closePath();
		c.fill();

		// draw arrow
		c.translate(0,-5);
		c.rotate(this.angle*Math.PI/180);
		c.fillStyle = this.recharging ? 'rgba(255,0,0,0.7)' : 'rgba(0,255,0,0.7)';
		c.beginPath();
		c.moveTo(0,-12);
		c.lineTo(-6,-12);
		c.lineTo(-6,-22-this.power);
		c.lineTo(-12,-22-this.power);
		c.lineTo(0,-42-this.power);
		c.lineTo(12,-22-this.power);
		c.lineTo(6,-22-this.power);
		c.lineTo(6,-12);
		c.closePath();
		c.fill();
		
		c.restore();
	}
	
}