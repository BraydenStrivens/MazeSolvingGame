
/** @type {HTMLCanvasElement} */

import State from "./states/state.js"
import MainMenu from "./states/main_menu_state.js"
import Pause from "./states/pause_state.js"
import Play from "./states/play_state.js"
import SelectMode from "./states/select_mode.js"
import Store from "./states/store_state.js"
import Settings from "./states/settings_state.js"
import Customize from "./states/customize_state.js"
import Player from "./player.js"

class Game {
    constructor(canvas) {
        this.canvas = canvas

        this.gameWidth = this.canvas.width 
        this.gameHeight = this.canvas.height 

        this.stateStack = []
        this.stateStackLength = 0

        this.isRunning = false
        this.isPlaying = false

        this.player = new Player(this)

        this.fps = 70
        this.timer = 0
        this.interval = 1000 / this.fps

        this.mouse = {
            x: null,
            y: null,
            pressed: false
        }

        // Mouse Down Detection
        this.canvas.addEventListener('mousedown', (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.pressed = true
        })

        // Mouse Up Detection
        this.canvas.addEventListener('mouseup', (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.pressed = false
        })

        // Mouse Movement Detection
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
        })
    }

    pushState(newState) {
        const currentState = this.stateStack[this.stateStackLength - 1]

        // Adds new state if the new state is different than the current state
        if (newState != currentState.toString()) {
            if (newState == "Main Menu") {    
                const mainMenu = new MainMenu(this)
                this.stateStack.push(mainMenu)
    
            } else if (newState == "Pause") {
                const pause = new Pause(this)
                this.stateStack.push(pause)
    
            } else if (newState == "Play") {
                const play = new Play(this)
                this.stateStack.push(play)
    
            } else if (newState == "Select Mode") {
                const selectMode = new SelectMode(this)
                this.stateStack.push(selectMode)
    
            } else if (newState == "Settings") {
                const settings = new Settings(this)
                this.stateStack.push(settings)
    
            } else if (newState == "Store") {
                const store = new Store(this)
                this.stateStack.push(store)
    
            } else if (newState == "Customize") {
                const customize = new Customize(this)
                this.stateStack.push(customize)
            }     
    
            this.stateStackLength++
        }
    }

    popState() {
        // Removes state if state stack contains two or more states
        if (this.stateStackLength > 1) {
            this.stateStack.pop()
            this.stateStackLength--
        }
    }

    update() {
        // Ticks the state at the end of the state stack
        this.stateStack[this.stateStackLength - 1].tick()

        // Ticks the player if in 'playing' state
        if (this.stateStack[this.stateStackLength - 1].toString() == 'play') this.player.tick()
    }

    render(context, deltaTime) {
        // Renders game at defined frames per second
        if (this.timer > this.interval) {
            this.timer = 0
            context.clearRect(0, 0, this.gameWidth, this.gameHeight)

            // Renders the state at the end of the state stack
            this.stateStack[this.stateStackLength - 1].render(context)

            // Renders the player if in 'playing' state
            if (this.stateStack[this.stateStackLength - 1].toString() == 'Play') this.player.render(context)
        }

        this.timer += deltaTime
    }

    init() {
        this.isRunning = true

        // Initializes the game to the Main Menu
        this.stateStack.push(new MainMenu(this))
        this.stateStackLength = 1
    }  
}

export default Game