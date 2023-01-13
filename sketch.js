//console.log('running collisions.js');

// Collision detection and resolution

// Move the mouse, the asterisk responds to overlaps with the gray circle
// it collides with the box and displaces the cloud

let box, asterisk, cloud, circle;

function preload() {
	circle = new Sprite(400, 200, 100, 'static');
	circle.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanStanding0.png', 1);
    circle.ani.frameDelay = 10;
	circle.overlaps(allSprites);

	box = new Sprite(200, 200, 75, 120, 'static');
	box.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/fatMan01.png', 3);

	cloud = new Sprite(600, 200, 100);
	cloud.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/constelation01.png', 3);
	cloud.ani.frameDelay = 10;
	// higher drag increases the force required to displace a sprite
	cloud.drag = 100;
	// increasing rotationDrag or angularDrag increases the force
	// required to rotate a sprite
	cloud.rotationDrag = 100;

	asterisk = new Sprite(400, 200, 120);
	// if you don't give the animation a name, the name "default" will be used
	asterisk.addAni('https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanRunner00.png', 3);
	asterisk.addAni('round', 'https://raw.githubusercontent.com/rmz/esfuerzo/main/img/mayanStanding1.png', 1);
	asterisk.rotationDrag = 2;
}

function setup() {
	//new Canvas(800, 400);
  createCanvas(displayWidth, displayHeight);
}

function draw() {
	background(255);

	asterisk.moveTowards(mouse);

	if (asterisk.overlapping(circle)) {
		asterisk.ani = 'round';
	} else {
		asterisk.ani = 'default';
	}

	// if debug is set to true the sprite's physic's body, center,
	// and layer are visualized
	allSprites.debug = mouse.pressing();
}
