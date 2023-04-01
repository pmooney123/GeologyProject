class InputController {
    constructor() {
        this.pressed = []
        this.scroll_down = false
        this.scroll_up = true
    }
    add_press(key) {
        if (!this.isPressed(key)) {
            this.pressed.push(key)
        }
    }
    remove_press(key) {
        this.pressed.splice(this.pressed.indexOf(key), 1)
    }
    isPressed(key) {
        return this.pressed.includes(key)
    }
    reset_scroll() {
        this.scroll_down = false
        this.scroll_up = false
    }
}