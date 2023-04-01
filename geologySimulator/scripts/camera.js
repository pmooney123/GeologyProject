class Camera {
    constructor(width, height) {
        this.x = 0
        this.y = 0
        this.zoom = 1.0
        this.screen_width = width
        this.screen_height = height
        this.zoom_factor = 1.1
    }
    move_to(x, y) {
        this.x = x
        this.y = y
    }
    move(x, y) {
        this.x += x
        this.y += y
    }
    get_real_x(screen_x) {
        return (screen_x + this.x - this.screen_width/2)
    }
    get_real_y(screen_y) {
        return (screen_y + this.y - this.screen_height/2)
    }
    get_screen_x(actual_x) {
        return ((actual_x - this.x) / this.zoom) + (this.screen_width/2)
    }
    get_screen_y(actual_y) {
        return ((actual_y - this.y) / this.zoom) + (this.screen_height/2)
    }
}