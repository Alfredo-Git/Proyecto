function Background(ctx, color) {
    this.ctx = ctx;
    this.color = 'red';
}

Background.prototype.draw = function() {
    this.ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height
    )
};

