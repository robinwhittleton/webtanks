var canvas, c, landscape, loop;

// tank state
var aimLeft, aimRight, powerUp, powerDown, fireShot;

document.addEventListener( 'keydown', onKeyDown, false );
document.addEventListener( 'keyup', onKeyUp, false );

function init(){
	canvas = document.getElementsByTagName('canvas')[0];
	c = canvas.getContext('2d');
	
	landscape = new Landscape();
	tank = new Tank('red');
	
	landscape.draw();
	tank.draw();
	
	loop = setInterval(gameLoop,1000/30);
	
}

function gameLoop(){
	c.clearRect(0,0,canvas.width,canvas.height)
	tank.update();
	landscape.draw();
	tank.draw();
}


function onKeyDown(e){
	switch(e.keyCode){
		case 27: // ESC
			clearInterval(loop);
		case 37: // left
			aimLeft = true;
			break;
		case 39: // right
			aimRight = true;
			break;
		case 38: // up
			powerUp = true;
			break;
		case 40: // down
			powerDown = true;
			break;
		case 32: // SPACE
			fireShot = true;
			break;
		default:
			break;
	}
}

function onKeyUp(e){
	switch(e.keyCode){
		case 37:
			aimLeft = false;
			break;
		case 39:
			aimRight = false;
			break;
		case 38:
			powerUp = false;
			break;
		case 40:
			powerDown = false;
			break;
		case 32: // SPACE
			fireShot = false;
			break;
		default:
			break;
	}
}