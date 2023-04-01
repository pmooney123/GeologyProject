class Game {
    constructor() {
        this.world = new World().load()

    }
    getDrawables() {
        return this.world.get_tiles()
    } //Return a list of all objects to be drawn on screen

    load() {
        console.log("game loaded")
        return this
    }

}