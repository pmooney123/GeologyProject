class Engine {
    constructor() {

    }
    initialise() {
        console.log("engine initialised")
        return this
    }
    update_game(game, inputController) {
        let map = game.getDrawables()

        //wind erosion- if a random variable is less than the wind coefficient,
        //a random neighboring tile is compared and if it is lower, the tile is shrunk and the neighboring tile receives half as much height

        //volcanic activity
        //the tiles x coordinate is compared to a sin wave centered on the map
        let dx = Math.floor(Math.random() * 3 - 1)
        let dy = Math.floor(Math.random() * 3 - 1)
        let wind_chance = 50/100
        let volcano_chance = 20/100

        let do_wind = false
        if (Math.random() < wind_chance) {
            do_wind = true
        }
        let do_volcano = false
        if (Math.random() < volcano_chance) {
            do_volcano = true
        }

        for (let x = 0; x < map.length; x++) {
            for (let y = 0; y < map[0].length; y++) {
                let tile = map[x][y]

                //wind erosion
                if (do_wind) {
                    if (map[x-dx] != null) {
                        if (map[x - dx][y - dy] != null) {
                            if (tile.height > map[x - dx][y - dy].height) {
                                tile.change_height(-1);
                                map[x - dx][y - dy].change_height(1);
                            }
                        }
                    }
                }
                if (do_volcano) {
                    if (Math.random() * 2 < Math.pow(Math.sin(x * 6.28 / (map.length * 2)), 2)) {
                        tile.change_height(1)
                        map[this.getRandomInt(map.length)][this.getRandomInt(map[x].length)].change_height(-1)
                    }
                }
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
}
