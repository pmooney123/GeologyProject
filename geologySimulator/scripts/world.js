class World {
    constructor() {
        this.width = 200
        this.length = 100

        this.tiles = new Array(this.width)
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i] = new Array(this.length)
        }

        for (let x = 0; x < this.tiles.length; x++) {
            for (let y = 0; y < this.tiles[0].length; y++) {
                this.tiles[x][y] = new Tile(x, y)

            }
        }

    }
    load() {
        return this
    }
    get_tiles() {
        return this.tiles
    }


}