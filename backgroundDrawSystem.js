class BackgroundDrawSystem {
    draw(entity) {
        alert('meow')
        strokeWeight(5);
        stroke(255);
        rect(0, 0, entity.width, entity.height);
    }
}