
import State from "./state.js"

class Customize extends State {
    constructor(game) {
        super(game)
    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'pink'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Customize", 10, 50)
    }

    toString() {
        return 'Customize'
    }
}

export default Customize