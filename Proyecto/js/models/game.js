function Game(canvas) {
    this.ctx = canvas.getContext("2d");

    this.player = new Player(this.ctx, 100, 100);
    this.player2 = new Player(this.ctx, 800, 100);

    this.drawIntervalCount = 0;
    this.drawIntervalId = undefined;
    this.setEvents()
}


Game.prototype.start = function() {
    // if (!this.isRunning()){
        this.drawIntervalId = setInterval(function() {
            this.drawIntervalCount++;
        
            if (this.checkGameOver() || this.borderCollision()){
                this.stop();
            
            }

            if(this.player.collision(this.player2) || this.player2.collision(this.player)) {
                this.stop();
            }

            if(this.player.bodyCollision(this.player2.trail) || this.player2.bodyCollision(this.player.trail)){
                this.stop();
            }

            this.clear();
            this.draw();
        }.bind(this), DRAW_INTERVAL_MS);
    // }
};
  
Game.prototype.isRunning = function(){
      return this.drawIntervalId !== undefined;
}

Game.prototype.borderCollision = function(){
    return this.player.x < 0 || (this.player.x + this.player.width) > window.innerWidth || //player con el borde
    this.player.y < 0 || (this.player.y + this.player.height) > window.innerHeight || //player con el borde
    this.player2.x < 0 || (this.player2.x + this.player2.width) > window.innerWidth || //player2 con el borde
    this.player2.y < 0 || (this.player2.y + this.player2.height) > window.innerHeight  //player2 con el borde         
}

// Game.prototype.tronCollision = function(){
//     return (
//     ((this.player.x > (this.player2.x - this.player2.width)) && // choque player contra player2 desde arriba
//     (this.player.x < (this.player2.x + this.player.width)) && 
//     (this.player.y + this.player.height) === this.player2.y) || 

//     ((this.player.x === (this.player2.x + this.player2.width)) && // choque player contra player2 desde derecha
//     (this.player.y > (this.player2.y - this.player2.height)) &&
//     (this.player.y < (this.player2.y + this.player2.height))) || 

//     ((this.player.x > (this.player2.x - this.player2.width)) && // choque player contra player 2 desde abajo
//     (this.player.x < (this.player2.x + this.player2.width)) &&
//     (this.player.y === (this.player2.y + this.player2.height))) ||

//     (((this.player.x + this.player.width) === this.player2.x) && // choque player contra player 2 desde la izquierda
//     (this.player.y > (this.player2.y - this.player2.height)) &&
//     (this.player.y < (this.player2.y + this.player2.height)))

//     )
   
//}

Game.prototype.stop = function(){
      clearInterval(this.drawIntervalId);
      this.drawIntervalId = undefined;
      alert("san sacabó")
}

Game.prototype.onKeyEvent = function(event) {
      this.player.onKeyEvent(event);
      this.player2.onKeyEvent2(event);
}

Game.prototype.draw = function() {
    this.player.draw();
    this.player2.draw();
    this.back
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