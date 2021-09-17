let background;

function setup() {
    createCanvas(1300, 800);
    try {
        background = new Entity(width, height, new BackgroundDrawSystem());
    } catch(error) {
        alert(error.message);
    }
}
  
function draw() {
    try {
        background(220);
        background.draw();
    } catch(error) {
        alert(error.message);
    }
}