class Entity {
    constructor(width, height, drawSystem) {
        this.width = width;
        this.height = height;
        this.drawSystem = drawSystem;
    }

    draw() {
        alert('entity draw');
        this.drawSystem.draw(this);
    }
}
