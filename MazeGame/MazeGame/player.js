
class Player {
    constructor(game) {
        this.game = game

    }

    tick() {
        
    }

    render(context) {
        context.fillStyle = 'white'
        context.fillRect(500, 500, 100, 100)
    }
}

export default Player