
import State from "./state.js"

class Store extends State {
    constructor(game) {
        super(game)
    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'blue'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Store", 10, 50)
    }

    toString() {
        return 'Store'
    }
}

export default Store