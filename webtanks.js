var canvas, c, landscape;

function init(){
	canvas = document.getElementsByTagName('canvas')[0];
	c = canvas.getContext('2d');
	
	landscape = new Landscape();
	tank = new Tank('red');
	
	landscape.draw();
	tank.draw();
	
}



