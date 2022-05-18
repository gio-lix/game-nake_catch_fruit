
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

let scale = 10
const rows = canvas.height / scale
const columns = canvas.height / scale

let snake;
let fruit;


(function setup() {
    snake = new Snake()
    fruit = new Fruit()
    fruit.pickLocation()
    window.setInterval(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        fruit.draw()
        snake.update()
        snake.draw()
        if (snake.eat(fruit)) {
            fruit.pickLocation()
        }

    }, 200)

})()

window.addEventListener("keydown", (e) => {
    const direction = e.key.replace("Arrow", "")
    snake.location(direction)
})

