//console.log('running collisions.js');

// Collision detection and resolution

// Move the mouse, the maya responds to overlaps with the gray mayaStill
// it collides with the gula and displaces the cosmo

let gula, maya, cosmo, mayaStill;

function preload() {
	mayaStill = new Sprite(600, 200, 100, 250, 'static');
	mayaStill.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanStanding0.png', 1);
    mayaStill.ani.frameDelay = 10;
	mayaStill.overlaps(allSprites);

	gula = new Sprite(200, 200, 180, 180, 'static');
	gula.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/fatMan01.png', 3);

	cosmo = new Sprite(900, 200, 160);
	cosmo.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/constelation320_00.png', 3);
	cosmo.ani.frameDelay = 10;
	// higher drag increases the force required to displace a sprite
	cosmo.drag = 100;
	// increasing rotationDrag or angularDrag increases the force
	// required to rotate a sprite
	cosmo.rotationDrag = 100;

	maya = new Sprite(600, 200, 100, 250);
	// if you don't give the animation a name, the name "default" will be used
	maya.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanRunner00.png', 3);
	maya.addAni('round', 'https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanStanding1.png', 1);
	maya.rotationDrag = 2;
}

function setup() {
	//new Canvas(800, 400);
  createCanvas(displayWidth, displayHeight);
}

function draw() {
	background(255);

	maya.moveTowards(mouse);

	if (maya.overlapping(mayaStill)) {
		maya.ani = 'round';
	} else {
		maya.ani = 'default';
	}

	// if debug is set to true the sprite's physic's body, center,
	// and layer are visualized
	allSprites.debug = mouse.pressing();
}
