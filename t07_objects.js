/********************************************************/
//
/********************************************************/
var xPos = 100;
var yPos = 100;
var xVel = 10;
var yVel = 12;
var diameter = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background('red');

  xPos = xPos + xVel;
  yPos = yPos + yVel;

  if (xPos >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
  }
  if (xPos <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
  }

  if (yPos >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
  }
  if (yPos <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
  }

  ellipse(xPos, yPos, diameter);
}