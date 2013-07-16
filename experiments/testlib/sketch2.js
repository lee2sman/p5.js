var clicks = 0, presses = 1;
var img, img2, rad;
var lastAdd = 0;
var rads = 0;
var r;
var bg = [];
var writer;

var canvas0, canvas1;

var setup = function() {
	println("setup");
	canvas0 = createCanvas(1200, 600);
	canvas1 = createCanvas(150, 150)
	canvas1.setPosition(50, 30);
	//colorMode(HSV);
	printMatrix();
	writer = new PrintWriter("name1");
};


var draw = function() {

	setCanvas(canvas0);
	bg = [255*sin(.008*frameCount), 255*sin(.003*frameCount), 255*sin(.01*frameCount)];
	fill(bg[0], bg[1], bg[2]);
	noStroke();
	rect(0, 0, width, height);

	strokeWeight(10);
	stroke(255, 100, 0, 100);
	var c0 = [255, 255, 255];
	var c1 = [0, 0, 0];
	var c2 = lerpColor(c0, c1, 0.8);
	fill(c2[0], c2[1], c2[2]);
	translate(width/4, height/4);
	shearX(PI/4);
	rect(0, 0, 50, 50);

	setCanvas(canvas1);
	background(255, 200, 10);
	ellipse(width/2, height/2, 100, 30);
};

var mousePressed = function(e) {
	println("mouse pressed");
	//save("hi");
	//writer.close();
	//saveStrings(['hi', 'blah']);
	clicks++;
};

var keyPressed = function(e) {
	keyCode = e.keyCode || e.which;
	key = String.fromCharCode(keyCode);
	println("key pressed "+keyCode+" "+key);
	writer.print(key);
	//alert('key pressed '+keyCode);
	presses++;
};

var keyReleased = function(e) {
	keyCode = e.keyCode || e.which;
	key = String.fromCharCode(keyCode);
};

var keyTyped = function(e) {
};

