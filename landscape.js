function Landscape() {
	var landscape = [];
	
	landscape[0] = Math.random()*canvas.height/2 + canvas.height/4; // sensible initial point
	for (i=1;i<=canvas.width/5;i++) {
		landscape[i] = landscape[i-1]+(Math.random()*30-15);
		if (landscape[i]<0) landscape[i] = 0;
		if (landscape[i]>canvas.height) landscape[i] = canvas.height;
	}

	this.getHeight = function(x){
		return landscape[parseInt(x/5,10)];
	}
	
	this.draw = function(){
		c.fillStyle = "yellow";
		c.beginPath();
		c.lineTo(0,canvas.height)
		for (i=0;i<landscape.length;i++) {
			c.lineTo(i*5,landscape[i]);
		}
		c.lineTo(canvas.width,canvas.height);
		c.lineTo(0,canvas.height)
		c.fill();
	}
	
}