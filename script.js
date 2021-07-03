let canvas = document.querySelector('#tutorial')
let context = canvas.getContext('2d')
let box = 32
let snake = [0]
snake[0] = {
    x: 8 * box
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "green"
    context.fillRect( 0,0, 16 * box, 16 * box)
}
function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)        
    }
}
criarBG()
criarCobrinha()