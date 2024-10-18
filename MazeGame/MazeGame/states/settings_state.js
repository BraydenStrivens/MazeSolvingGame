
import State from "./state.js"

class Settings extends State {
    constructor(game) {
        super(game)
    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'purple'
        context.fillRect(0, 0, this.game.gameWidth, this.game.gameHeight)
        context.fillStyle = 'black'
        context.font = "48px serif"
        context.fillText("Settings", 10, 50)
    }

    toString() {
        return 'Settings'
    }
}

export default Settings