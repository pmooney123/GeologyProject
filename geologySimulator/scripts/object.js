class GameObject {
    constructor(parameters) {
        this.x = parameters.x
        this.y = parameters.y
        this.angle = parameters.angle
        this.x_velocity = parameters.x_velocity
        this.y_velocity = parameters.y_velocity

        this.size = parameters.size
        this.color = parameters.color

        this.flagForRemoval = false

        this.a = 0
        this.max_a = 0.02
        this.r = 0
        this.dr = 0.05
    }

    draw(ctx, camera) {
        ctx.fillStyle = this.color
        ctx.beginPath();
        let size = this.size / camera.zoom
        ctx.rect(
            (camera.get_screen_x(this.x) - size/2) * this.size,
            (camera.get_screen_y(this.y) - size/2) * this.size,
            size,
            size);
        ctx.fill();
    }
    update_object() {
        this.angle += this.r

        this.x_velocity += this.a * Math.cos(this.angle)
        this.y_velocity += this.a * Math.sin(this.angle)

        this.x += this.x_velocity
        this.y += this.y_velocity
    }
}