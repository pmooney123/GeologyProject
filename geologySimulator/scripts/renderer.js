class Renderer {
    constructor(camera) {
        this.camera = camera;
    }
    check_inputs(inputController) {
        if (inputController.scroll_up) {
            this.camera.zoom /= this.camera.zoom_factor
        } else if (inputController.scroll_down) {
            this.camera.zoom *= this.camera.zoom_factor
        }
        let speed = 5 * this.camera.zoom
        if (inputController.isPressed("a")) {
            this.camera.move(-1 * speed, 0)
        }
        if (inputController.isPressed("w")) {
            this.camera.move(0, -1 * speed)
        }
        if (inputController.isPressed("s")) {
            this.camera.move(0, speed)
        }
        if (inputController.isPressed("d")) {
            this.camera.move(speed, 0)
        }
    }
    animate_game(ctx, game, inputController) {
        this.check_inputs(inputController)

        ctx.clearRect(0, 0, this.camera.screen_width, this.camera.screen_height)

        let draw = game.getDrawables()

        for (let x = 0; x < draw.length; x++) {

            for (let y = 0; y < draw[0].length; y++) {

                draw[x][y].draw(ctx, this.camera)

            }
        }

    }
}