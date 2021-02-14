/********************************************************/
//
/********************************************************/
var circleX = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (255,209,299);
  strokeWeight(2);
  fill(250,25,0,210);
  ellipse(circleX, 200, 100, 100);
  circleX = circleX + 1;
 
}