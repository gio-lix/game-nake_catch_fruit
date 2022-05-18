class Fruit {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    pickLocation() {

        this.x = Math.floor(Math.random() * rows - 1) * scale
        this.y = Math.floor(Math.random() * columns - 1) * scale
    }
    draw() {
        ctx.fillStyle = "#00ff22"
        ctx.fillRect(this.x,this.y, scale, scale)
    }
}