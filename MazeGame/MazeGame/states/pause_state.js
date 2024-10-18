
import State from "./state.js"

class Pause extends State {
    constructor(game) {
        super(game)
    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'gray'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Pause", 10, 50)
    }

    toString() {
        return 'Pause'
    }
}

export default Pause