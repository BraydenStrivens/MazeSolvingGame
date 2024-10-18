
import State from "./state.js"

class Play extends State {
    constructor(game) {
        super(game)
    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'green'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Play", 10, 50)
    }

    toString() {
        return 'Play'
    }
}

export default Play