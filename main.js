let backgroundEntity;

function setup() {
    createCanvas(1300, 800);
    try {
        backgroundEntity = new Entity(width, height, new BackgroundDrawSystem());
    } catch(error) {
        alert(error.message);
    }
}
  
function draw() {
    try {
        background(220);
        backgroundEntity.draw();
    } catch(error) {
        alert(error.message);
    }
}