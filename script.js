let canvas = document.querySelector('#tutorial')
let ctx = canvas.getContext('2d')
let box = 32

function criarBG() {
    ctx.fillStyle = "green"
    ctx.fillRect( 0,0, 16 * box, 16 * box)
}
criarBG()