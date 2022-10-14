class Square {
    constructor(ctx, x, y, directions) {
        this.ctx = ctx
        this.fill = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        this.directions = directions
        this.x = x
        this.y = y
        this.w = 50
        this.stopped = false
    }

    move() {
        if (this.stopped === true) return

        this.x += this.directions[0]
        this.y += this.directions[1]
    }

    onClick(x, y) {
        if (
            (this.x < x && (this.x + this.w) > x) &&
            (this.y < y && (this.y + this.w) > y) 
        ) {
            this.stopped = !this.stopped
        }
    }

    checkBorders(w, h) {
        if (this.x + this.w >= w) this.directions[0] = -this.directions[0]
        if (this.y + this.w >= h) this.directions[1] = -this.directions[1]
        if (this.x <= 0) this.directions[0] = -this.directions[0]
        if (this.y <= 0) this.directions[1] = -this.directions[1]
    }

    getFill() {
        if (this.stopped === false) return this.fill
        return "red"
    }
    
    draw() {
        this.ctx.fillStyle = this.getFill()
        
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.w);
        this.ctx.fill();
        this.ctx.stroke();
    }
}