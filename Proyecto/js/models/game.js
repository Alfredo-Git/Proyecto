function Game(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
  
    document.addEventListener('keydown', this.onKeyEvent.bind(this));
    document.addEventListener('keyup', this.onKeyEvent.bind(this));

    this.player = new Player(this.ctx);

    this.drawIntervalCount = 0;
    this.drawIntervalId = undefined;
  }
  
  var blockMovement = false;

  window.addEventListener('keydown', function(e) {
    if (!blockMovement) {
        blockMovement = keyDownEventHandler(e, player);
    }
}, true);

function keyDownEventHandler(e, player) {


}

  Game.prototype.start = function() {
    if (!this.isRunning()){
        this.drawIntervalId = setInterval(function() {
        this.drawIntervalCount++;
        

    if (this.checkGameOver()){
        this.stop();
    }
        this.draw();
        }.bind(this), DRAW_INTERVAL_MS);
     }
  };
  
  Game.prototype.isRunning = function(){
      return this.drawIntervalId !== undefined;
  }

  Game.prototype.stop = function(){
      clearInterval(this.drawIntervalId);
      this.drawIntervalId = undefined;
  }

  Game.prototype.onKeyEvent = function(event) {
      this.player.onKeyEvent(event);
  }

  Game.prototype.draw = function() {
    this.player.draw();
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