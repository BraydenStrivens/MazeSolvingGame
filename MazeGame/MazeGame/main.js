
import Game from "./game.js"

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    const context = canvas.getContext('2d')

    canvas.width = 1280
    canvas.height = 720

    const game = new Game(canvas)
    game.init()

    let lastTime = 0

    function gameLoop(timeStamp) {
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp

        game.update()
        game.render(context, deltaTime)

        if (game.isRunning) requestAnimationFrame(gameLoop)
    }

    gameLoop(0)

    const prevStateButton = document.getElementById('previousStateButton')
    prevStateButton.addEventListener('click', function(e) {
        game.popState()
    })

    const dropdown = document.getElementById('StateChange')
        dropdown.addEventListener('change', function(e) {
            const newState = e.target.value
            
            game.pushState(newState)
        })
})
