function Game(canvas) {
    this.ctx = canvas.getContext("2d");

    this.player = new Player(this.ctx, 100, 100);
    this.player2 = new Player(this.ctx, 300, 100);

    this.drawIntervalCount = 0;
    this.drawIntervalId = undefined;
    this.setEvents()
}


Game.prototype.start = function() {
    // if (!this.isRunning()){
        this.drawIntervalId = setInterval(function() {
            this.drawIntervalCount++;
        
            if (this.checkGameOver()){
                this.stop();
            
            }

            if (this.isCollision()){
                this.stop();
            }

            // this.clear(); commented to keep the trail
            this.draw();
        }.bind(this), DRAW_INTERVAL_MS);
    // }
};
  
Game.prototype.isRunning = function(){
      return this.drawIntervalId !== undefined;
}

Game.prototype.isCollision = function(){
    return this.player.x < 0 || this.player.x > window.innerWidth || 
    this.player.y < 0 || this.player.y > window.innerHeight ||
    this.player2.x < 0 || this.player2.x > window.innerWidth || 
    this.player2.y < 0 || this.player2.y > window.innerHeight              
}

Game.prototype.stop = function(){
      clearInterval(this.drawIntervalId);
      this.drawIntervalId = undefined;
      alert("san sacabo")
}

Game.prototype.onKeyEvent = function(event) {
      this.player.onKeyEvent(event);
      this.player2.onKeyEvent2(event);
}

Game.prototype.draw = function() {
    this.player.draw();
    this.player2.draw();
};
  
  
Game.prototype.checkGameOver = function() {
 
};
  
Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);
  
    if (confirm("GAME OVER! Play again?")) {
      location.reload();
    }
};
  
Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};

Game.prototype.setEvents = function() {
    document.addEventListener('keydown', this.onKeyEvent.bind(this));
    document.addEventListener('keyup', this.onKeyEvent.bind(this));
}