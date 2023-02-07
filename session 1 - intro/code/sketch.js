var size;

function setup() {
  createCanvas(500, 500);
  size = 50;
  background(220, 0, 100);
}

function draw() {
  //background(220, 0, 100);
  fill(0, 150, 200);
  ellipse(mouseX, mouseY, size, size);
  size = size + 5;
  if(size > 500) size = 50;
}