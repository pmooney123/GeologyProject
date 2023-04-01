//class that stores key presses
let inputController = new InputController()
document.addEventListener('keydown', (event) => {
    inputController.add_press(event.key)
})
document.addEventListener('keyup', (event) => {
    inputController.remove_press(event.key)
})
document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        inputController.scroll_down = true
    }
    if (event.deltaY < 0) {
        inputController.scroll_up = true
    }
})

//On load function for start up
window.onload = function () {
    console.log("window loaded")
}

//Canvas element that game paints to
let canvas = document.getElementById('mainCanvas');

//Context of the canvas element
let ctx = canvas.getContext('2d');

//Handles game logic
let engine = new Engine().initialise()

//Stores game state
const game = new Game().load()

//Controls drawing of game state to canvas
let renderer = new Renderer(new Camera(canvas.width, canvas.height))

//Recurring function for game loop
function step() {

    engine.update_game(game, inputController)

    renderer.animate_game(ctx, game, inputController)

    inputController.reset_scroll()

    window.requestAnimationFrame(step)

}

step()