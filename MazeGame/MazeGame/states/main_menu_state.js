
import State from "./state.js"

class MainMenu extends State {
    constructor(game) {
        super(game)
    }

    tick() {

    }

    render(context) {
        context.fillStyle = 'red'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Main Menu", 10, 50)
    }

    toString() {
        return 'Main Menu'
    }
}

export default MainMenu