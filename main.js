const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.addEventListener("click", e => {
    const { offsetX, offsetY } = e
    for (const square of squares) {
        square.onClick(offsetX, offsetY)
    }
})

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function clean() {
    ctx.fillStyle = "white"
        
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.stroke();
}

const squares = [
    new Square(ctx, 20, 20, [rand(0, 5), rand(0, 5)]),
    new Square(ctx, 80, 80, [rand(0, 5), rand(0, 5)]),
    new BigSquare(ctx, 180, 180, [rand(0, 5), rand(0, 5)]),
]

setInterval(() => {
    clean()

    for (const square of squares) {
        square.checkBorders(canvas.width, canvas.height)
        square.move()
        square.draw()
    }

}, 1000 / 60)