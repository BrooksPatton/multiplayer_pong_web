class BackgroundDrawSystem {
    draw(entity) {
        stroke(255);
        strokeWeight(5);
        rect(0, 0, entity.width, entity.height);
    }
}