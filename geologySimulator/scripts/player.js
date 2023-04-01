
class Player {
    constructor() {
        this.object = new GameObject({
            x: 300,
            y: 300,
            angle: 0,
            x_velocity: 0,
            y_velocity: 0,
            color: "blue",
            size: 10,
        })
    }
    move(x, y) {
        this.object.x += x
        this.object.y += y
    }
    getX() {return this.object.x};
    getY() {return this.object.y}
    get_object() {
        return this.object
    }


}