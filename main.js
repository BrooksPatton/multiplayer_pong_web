let background;

function setup() {
    createCanvas(1300, 800);
    background = new Entity(width, height, new BackgroundDrawSystem);
}
  
function draw() {
background(220);
background.draw();
}