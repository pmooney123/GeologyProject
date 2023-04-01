class Tile {
    constructor(x, y) {
        this.size = 2
        this.x = x * this.size
        this.y = y * this.size
        this.color = Math.random() > 0.5 ? "blue" : "red"
        this.height = Math.random() * 100
    }
    draw(ctx, camera) {
        this.update_color()
        ctx.fillStyle = this.color
        ctx.beginPath();
        let size = this.size / camera.zoom
        ctx.rect(
            camera.get_screen_x(this.x) - size/2,
            camera.get_screen_y(this.y) - size/2,
            size,
            size);
        ctx.fill();
    }
    update_color() {
        let color_value = 255 * ( 1 - (this.height / 100) )
        if (color_value < 0) {
            color_value = 0
        }
        if (color_value > 255) {
            color_value = 255
        }
        this.color = "rgb(" + color_value + ", "  + color_value + ", " + color_value + ")"
    }

    change_height(value) {
        this.height += value
        if (this.height < 0) {
            this.height = 0
        }
        if (this.height > 100) {
            this.height = 100
        }
    }

}